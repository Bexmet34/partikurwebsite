"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { LogIn, LogOut, LayoutDashboard, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { data: session } = useSession();
  const { lang, toggleLanguage, t } = useLanguage();

  return (
    <nav className="navbar">
      <Link href="/" className="navbar-brand text-logo">
        Veyronix
      </Link>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button onClick={toggleLanguage} className="signout-btn" style={{ padding: '0.4rem 0.8rem', display: 'flex', gap: '0.5rem', alignItems: 'center', borderRadius: '8px' }}>
          <Globe size={18} />
          {lang === 'en' ? 'TR' : 'EN'}
        </button>
        {session ? (
          <div className="auth-user">
            <Link href="/dashboard" className="btn-primary" style={{ padding: "0.5rem 1rem" }}>
              <LayoutDashboard size={18} />
              {t.dashboard}
            </Link>
            <button onClick={() => signOut()} className="signout-btn">
              <LogOut size={16} />
              {t.logout}
            </button>
            {session.user?.image && (
              <img src={session.user.image} alt="Avatar" className="avatar" />
            )}
          </div>
        ) : (
          <button onClick={() => signIn("discord")} className="btn-primary">
            <LogIn size={18} />
            {t.login}
          </button>
        )}
      </div>
    </nav>
  );
}
