"use client";

/**
 * /admin — Main Dashboard Page
 * Displays contacts and chatMessages collections with:
 * - Real-time Firestore onSnapshot listeners
 * - Search by name or email
 * - Newest first
 * - View full message modal
 * - Delete with confirmation
 * - Loading, empty, error states
 */

import { useState, useEffect, useCallback } from "react";
import { useAdminAuth } from "@/components/AdminAuthContext";
import {
  subscribeToContacts,
  subscribeToChatMessages,
  deleteEntry,
  formatTimestamp,
  ContactEntry,
  ChatEntry,
} from "@/lib/adminService";
import {
  LogOut,
  MessageSquare,
  Mail,
  Search,
  Trash2,
  Eye,
  X,
  AlertTriangle,
  Shield,
  Users,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Tab = "contacts" | "chatMessages";

interface DeleteTarget {
  collection: string;
  id: string;
  name: string;
}

interface ViewTarget {
  name: string;
  email: string;
  subject?: string;
  message: string;
  timestamp: string;
  source?: string;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function Spinner({ small }: { small?: boolean }) {
  return (
    <div
      className={`rounded-full border-4 border-blue-600 border-t-transparent animate-spin ${
        small ? "w-5 h-5 border-2" : "w-10 h-10"
      }`}
    />
  );
}

function EmptyState({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center mb-4">
        <Mail className="w-7 h-7 text-gray-600" />
      </div>
      <p className="text-gray-400 text-sm">{message}</p>
    </div>
  );
}

function ErrorState({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="w-14 h-14 rounded-full bg-red-950/50 flex items-center justify-center mb-4">
        <AlertTriangle className="w-7 h-7 text-red-400" />
      </div>
      <p className="text-red-400 text-sm font-medium">Failed to load data</p>
      <p className="text-gray-500 text-xs mt-1">{message}</p>
    </div>
  );
}

// ─── View Message Modal ───────────────────────────────────────────────────────

function MessageModal({
  entry,
  onClose,
}: {
  entry: ViewTarget;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-gray-900 border border-gray-700/60 rounded-2xl w-full max-w-lg shadow-2xl animate-fade-in">
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-gray-800">
          <div className="flex-1 min-w-0 pr-4">
            <h3 className="text-white font-semibold text-lg truncate">{entry.name}</h3>
            <p className="text-gray-400 text-sm truncate mt-0.5">{entry.email}</p>
            {entry.source && (
              <span className="inline-block mt-1 text-xs bg-purple-900/40 text-purple-300 border border-purple-700/40 px-2 py-0.5 rounded-full">
                {entry.source}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            id="modal-close-btn"
            className="text-gray-500 hover:text-gray-300 transition-colors flex-shrink-0 p-1 rounded-lg hover:bg-gray-800"
            style={{ cursor: "pointer" }}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          {entry.subject && (
            <div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Subject</p>
              <p className="text-gray-300 text-sm">{entry.subject}</p>
            </div>
          )}
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Message</p>
            <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">{entry.message}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Received</p>
            <p className="text-gray-400 text-xs">{entry.timestamp}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Delete Confirmation Modal ────────────────────────────────────────────────

function DeleteModal({
  target,
  onConfirm,
  onCancel,
  loading,
}: {
  target: DeleteTarget;
  onConfirm: () => void;
  onCancel: () => void;
  loading: boolean;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-gray-900 border border-gray-700/60 rounded-2xl w-full max-w-sm shadow-2xl p-6">
        <div className="w-12 h-12 bg-red-950/50 rounded-full flex items-center justify-center mx-auto mb-4">
          <Trash2 className="w-6 h-6 text-red-400" />
        </div>
        <h3 className="text-white font-semibold text-center mb-1">Delete Entry?</h3>
        <p className="text-gray-400 text-sm text-center mb-6">
          This will permanently delete the entry from{" "}
          <span className="text-gray-200 font-medium">{target.name}</span>. This
          action cannot be undone.
        </p>
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            disabled={loading}
            id="delete-cancel-btn"
            className="flex-1 py-2.5 rounded-xl border border-gray-700 text-gray-300 hover:bg-gray-800 transition-colors text-sm font-medium disabled:opacity-50"
            style={{ cursor: "pointer" }}
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={loading}
            id="delete-confirm-btn"
            className="flex-1 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white transition-colors text-sm font-medium disabled:opacity-50 flex items-center justify-center gap-2"
            style={{ cursor: loading ? "not-allowed" : "pointer" }}
          >
            {loading ? <Spinner small /> : <Trash2 className="w-4 h-4" />}
            {loading ? "Deleting…" : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Data Table Row ───────────────────────────────────────────────────────────

function TableRow({
  id,
  name,
  email,
  subject,
  message,
  timestamp,
  source,
  collectionName,
  onView,
  onDelete,
}: {
  id: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  timestamp: string;
  source?: string;
  collectionName: string;
  onView: (entry: ViewTarget) => void;
  onDelete: (target: DeleteTarget) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const preview = message.length > 80 ? message.slice(0, 80) + "…" : message;

  return (
    <tr className="border-b border-gray-800/60 hover:bg-gray-800/30 transition-colors group">
      {/* Name */}
      <td className="px-4 py-3.5 align-top">
        <div className="flex flex-col">
          <span className="text-white text-sm font-medium leading-tight">{name}</span>
          {source && (
            <span className="text-xs text-purple-400 mt-0.5">{source}</span>
          )}
        </div>
      </td>

      {/* Email */}
      <td className="px-4 py-3.5 align-top hidden sm:table-cell">
        <span className="text-gray-300 text-sm">{email}</span>
      </td>

      {/* Subject */}
      <td className="px-4 py-3.5 align-top hidden md:table-cell">
        <span className="text-gray-400 text-sm">{subject || "—"}</span>
      </td>

      {/* Message preview */}
      <td className="px-4 py-3.5 align-top max-w-xs">
        <div className="text-gray-400 text-sm">
          {expanded ? (
            <span className="whitespace-pre-wrap text-gray-300">{message}</span>
          ) : (
            preview
          )}
          {message.length > 80 && (
            <button
              onClick={() => setExpanded((v) => !v)}
              className="ml-1 text-blue-400 hover:text-blue-300 text-xs inline-flex items-center gap-0.5"
              style={{ cursor: "pointer" }}
            >
              {expanded ? (
                <>less <ChevronUp className="w-3 h-3" /></>
              ) : (
                <>more <ChevronDown className="w-3 h-3" /></>
              )}
            </button>
          )}
        </div>
      </td>

      {/* Timestamp */}
      <td className="px-4 py-3.5 align-top hidden lg:table-cell">
        <span className="text-gray-500 text-xs whitespace-nowrap">{timestamp}</span>
      </td>

      {/* Actions */}
      <td className="px-4 py-3.5 align-top">
        <div className="flex items-center gap-2 opacity-70 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => onView({ name, email, subject, message, timestamp, source })}
            id={`view-btn-${id}`}
            className="p-1.5 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-blue-950/40 transition-colors"
            style={{ cursor: "pointer" }}
            title="View full message"
          >
            <Eye className="w-4 h-4" />
          </button>
          <button
            onClick={() => onDelete({ collection: collectionName, id, name })}
            id={`delete-btn-${id}`}
            className="p-1.5 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-950/40 transition-colors"
            style={{ cursor: "pointer" }}
            title="Delete entry"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
  );
}

// ─── Main Dashboard Page ──────────────────────────────────────────────────────

export default function AdminDashboard() {
  const { user, signOutAdmin } = useAdminAuth();

  // Data state
  const [contacts, setContacts] = useState<ContactEntry[]>([]);
  const [chatMessages, setChatMessages] = useState<ChatEntry[]>([]);
  const [contactsLoading, setContactsLoading] = useState(true);
  const [chatLoading, setChatLoading] = useState(true);
  const [contactsError, setContactsError] = useState<string | null>(null);
  const [chatError, setChatError] = useState<string | null>(null);

  // UI state
  const [activeTab, setActiveTab] = useState<Tab>("contacts");
  const [search, setSearch] = useState("");
  const [viewTarget, setViewTarget] = useState<ViewTarget | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<DeleteTarget | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  // ── Real-time subscriptions ──────────────────────────────────────────────
  useEffect(() => {
    const unsub = subscribeToContacts(
      (data) => {
        setContacts(data);
        setContactsLoading(false);
      },
      (err) => {
        setContactsError(err.message);
        setContactsLoading(false);
      }
    );
    return unsub;
  }, []);

  useEffect(() => {
    const unsub = subscribeToChatMessages(
      (data) => {
        setChatMessages(data);
        setChatLoading(false);
      },
      (err) => {
        setChatError(err.message);
        setChatLoading(false);
      }
    );
    return unsub;
  }, []);

  // ── Search filter ────────────────────────────────────────────────────────
  const filterEntries = useCallback(
    <T extends { name: string; email: string }>(arr: T[]): T[] => {
      if (!search.trim()) return arr;
      const q = search.toLowerCase().trim();
      return arr.filter(
        (e) =>
          e.name.toLowerCase().includes(q) ||
          e.email.toLowerCase().includes(q)
      );
    },
    [search]
  );

  const filteredContacts = filterEntries(contacts);
  const filteredChats = filterEntries(chatMessages);

  // ── Delete ───────────────────────────────────────────────────────────────
  async function handleDelete() {
    if (!deleteTarget) return;
    setDeleteLoading(true);
    try {
      await deleteEntry(deleteTarget.collection, deleteTarget.id);
    } catch (err) {
      console.error("Delete failed:", err);
    } finally {
      setDeleteLoading(false);
      setDeleteTarget(null);
    }
  }

  // ── Active data ──────────────────────────────────────────────────────────
  const isContacts = activeTab === "contacts";
  const activeLoading = isContacts ? contactsLoading : chatLoading;
  const activeError = isContacts ? contactsError : chatError;
  const activeData = isContacts ? filteredContacts : filteredChats;
  const totalCount = isContacts ? contacts.length : chatMessages.length;

  return (
    <div className="min-h-screen bg-gray-950 text-white" style={{ cursor: "default" }}>
      {/* ── Header ───────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 bg-gray-900/80 backdrop-blur-md border-b border-gray-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-white text-lg hidden sm:block">Admin Dashboard</span>
          </div>

          {/* User + sign out */}
          <div className="flex items-center gap-3">
            <span className="text-gray-400 text-sm hidden md:block truncate max-w-[180px]">
              {user?.email}
            </span>
            <button
              onClick={signOutAdmin}
              id="admin-signout-btn"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-red-400 border border-gray-700 hover:border-red-800/60 px-3 py-1.5 rounded-xl transition-all"
              style={{ cursor: "pointer" }}
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* ── Stats row ─────────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <StatCard
            label="Contact Submissions"
            value={contacts.length}
            icon={<Mail className="w-5 h-5" />}
            color="blue"
            loading={contactsLoading}
          />
          <StatCard
            label="Chat Messages"
            value={chatMessages.length}
            icon={<MessageSquare className="w-5 h-5" />}
            color="purple"
            loading={chatLoading}
          />
        </div>

        {/* ── Table panel ───────────────────────────────────────────────── */}
        <div className="bg-gray-900/60 border border-gray-800/60 rounded-2xl overflow-hidden">
          {/* Tab bar + search */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 border-b border-gray-800/60">
            {/* Tabs */}
            <div className="flex bg-gray-800/60 rounded-xl p-1 gap-1 flex-shrink-0">
              <TabButton
                id="tab-contacts"
                active={activeTab === "contacts"}
                onClick={() => setActiveTab("contacts")}
                icon={<Mail className="w-4 h-4" />}
                label="Contacts"
                count={contacts.length}
              />
              <TabButton
                id="tab-chatmessages"
                active={activeTab === "chatMessages"}
                onClick={() => setActiveTab("chatMessages")}
                icon={<MessageSquare className="w-4 h-4" />}
                label="Chat Messages"
                count={chatMessages.length}
              />
            </div>

            {/* Search */}
            <div className="relative flex-1 max-w-sm sm:ml-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
              <input
                id="admin-search"
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name or email…"
                className="w-full bg-gray-800/80 border border-gray-700/60 text-white placeholder-gray-500 rounded-xl py-2 pl-9 pr-4 text-sm focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all"
                style={{ cursor: "text" }}
              />
            </div>
          </div>

          {/* ── Table ───────────────────────────────────────────────────── */}
          {activeLoading ? (
            <div className="flex justify-center py-24">
              <Spinner />
            </div>
          ) : activeError ? (
            <ErrorState message={activeError} />
          ) : activeData.length === 0 ? (
            <EmptyState
              message={
                search
                  ? `No results for "${search}"`
                  : `No ${activeTab === "contacts" ? "contact submissions" : "chat messages"} yet.`
              }
            />
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-800/60 bg-gray-800/30">
                    <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden sm:table-cell">Email</th>
                    <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden md:table-cell">Subject</th>
                    <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Message</th>
                    <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden lg:table-cell">Received</th>
                    <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {activeData.map((entry) => (
                    <TableRow
                      key={entry.id}
                      id={entry.id}
                      name={entry.name}
                      email={entry.email}
                      subject={"subject" in entry ? entry.subject : undefined}
                      message={entry.message}
                      timestamp={formatTimestamp(entry.createdAt)}
                      source={"source" in entry ? (entry as ContactEntry).source : undefined}
                      collectionName={activeTab}
                      onView={setViewTarget}
                      onDelete={setDeleteTarget}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Footer row count */}
          {!activeLoading && !activeError && (
            <div className="px-4 py-3 border-t border-gray-800/60 flex items-center gap-2 text-xs text-gray-600">
              <Users className="w-3.5 h-3.5" />
              {search
                ? `Showing ${activeData.length} of ${totalCount} entries`
                : `${totalCount} total entries`}
            </div>
          )}
        </div>
      </main>

      {/* ── Modals ──────────────────────────────────────────────────────── */}
      {viewTarget && (
        <MessageModal entry={viewTarget} onClose={() => setViewTarget(null)} />
      )}
      {deleteTarget && (
        <DeleteModal
          target={deleteTarget}
          onConfirm={handleDelete}
          onCancel={() => setDeleteTarget(null)}
          loading={deleteLoading}
        />
      )}
    </div>
  );
}

// ─── Helper Sub-components ────────────────────────────────────────────────────

function StatCard({
  label,
  value,
  icon,
  color,
  loading,
}: {
  label: string;
  value: number;
  icon: React.ReactNode;
  color: "blue" | "purple";
  loading: boolean;
}) {
  const colorMap = {
    blue: {
      bg: "bg-blue-950/40",
      border: "border-blue-800/30",
      icon: "bg-blue-600/20 text-blue-400",
      text: "text-blue-400",
    },
    purple: {
      bg: "bg-purple-950/40",
      border: "border-purple-800/30",
      icon: "bg-purple-600/20 text-purple-400",
      text: "text-purple-400",
    },
  };
  const c = colorMap[color];

  return (
    <div className={`rounded-2xl border ${c.bg} ${c.border} p-5 flex items-center gap-4`}>
      <div className={`w-11 h-11 rounded-xl ${c.icon} flex items-center justify-center flex-shrink-0`}>
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-gray-500 text-xs font-medium truncate">{label}</p>
        {loading ? (
          <div className="h-7 w-12 bg-gray-800 animate-pulse rounded mt-1" />
        ) : (
          <p className={`text-2xl font-bold ${c.text}`}>{value}</p>
        )}
      </div>
    </div>
  );
}

function TabButton({
  id,
  active,
  onClick,
  icon,
  label,
  count,
}: {
  id: string;
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
  count: number;
}) {
  return (
    <button
      id={id}
      onClick={onClick}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
        active
          ? "bg-gray-700 text-white shadow-sm"
          : "text-gray-500 hover:text-gray-300"
      }`}
      style={{ cursor: "pointer" }}
    >
      {icon}
      <span className="hidden xs:inline">{label}</span>
      <span
        className={`text-xs px-1.5 py-0.5 rounded-full ${
          active
            ? "bg-blue-600/30 text-blue-300"
            : "bg-gray-700/60 text-gray-500"
        }`}
      >
        {count}
      </span>
    </button>
  );
}
