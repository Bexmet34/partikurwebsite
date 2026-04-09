"use client";

import { useState } from 'react';
import Navbar from "@/components/Navbar";
import styles from "./wiki.module.css";
import { Book, ChevronRight, Info, Shield, Zap, HelpCircle, Terminal } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function WikiPage() {
  const { lang } = useLanguage();
  const [activeSection, setActiveSection] = useState('intro');

  const wikiData = {
    en: {
      sidebar: [
        { id: 'intro', title: 'Introduction', icon: <Info size={18} /> },
        { id: 'getting-started', title: 'Getting Started', icon: <Zap size={18} /> },
        { id: 'commands', title: 'Commands Guide', icon: <Terminal size={18} /> },
        { id: 'permissions', title: 'Permissions', icon: <Shield size={18} /> },
        { id: 'faq', title: 'FAQ', icon: <HelpCircle size={18} /> },
      ],
      content: {
        intro: {
          title: 'Welcome to Veyronix Wiki',
          text: 'Veyronix is the leading Discord bot for Albion Online guild management. This wiki will help you understand how to use all features efficiently.',
        },
        'getting-started': {
          title: 'Getting Started',
          text: 'To get started, invite the bot to your server using the "Add to Server" button on the homepage. Once invited, use /settings to configure your Albion Guild ID.',
        },
        commands: {
          title: 'Commands Guide',
          text: 'The bot uses Slash Commands. Type / to see a list. Key commands include /createparty, /stats, and /settings.',
        },
        permissions: {
          title: 'Required Permissions',
          text: 'The bot requires "Manage Roles" and "View Channels" permissions to function correctly. Ensure the bot role is high enough in the hierarchy.',
        },
        faq: {
          title: 'Frequently Asked Questions',
          text: 'Q: How do I change the language?\nA: Use the /settings command or our web dashboard.',
        }
      }
    },
    tr: {
      sidebar: [
        { id: 'intro', title: 'Giriş', icon: <Info size={18} /> },
        { id: 'getting-started', title: 'Başlangıç', icon: <Zap size={18} /> },
        { id: 'commands', title: 'Komut Rehberi', icon: <Terminal size={18} /> },
        { id: 'permissions', title: 'Yetkiler', icon: <Shield size={18} /> },
        { id: 'faq', title: 'SSS', icon: <HelpCircle size={18} /> },
      ],
      content: {
        intro: {
          title: 'Veyronix Wiki\'ye Hoş Geldiniz',
          text: 'Veyronix, Albion Online lonca yönetimi için lider Discord botudur. Bu wiki, tüm özellikleri verimli bir şekilde nasıl kullanacağınızı anlamanıza yardımcı olacaktır.',
        },
        'getting-started': {
          title: 'Başlangıç Rehberi',
          text: 'Başlamak için ana sayfadaki "Sunucuya Ekle" butonunu kullanarak botu sunucunuza davet edin. Davet ettikten sonra Albion Guild ID\'nizi yapılandırmak için /settings komutunu kullanın.',
        },
        commands: {
          title: 'Komut Rehberi',
          text: 'Bot, Slash Komutlarını kullanır. Listeyi görmek için / yazın. Önemli komutlar arasında /createparty, /stats ve /settings bulunur.',
        },
        permissions: {
          title: 'Gerekli Yetkiler',
          text: 'Botun düzgün çalışması için "Rolleri Yönet" ve "Kanalları Görüntüle" yetkileri gereklidir. Bot rolünün hiyerarşide yeterince yüksek olduğundan emin olun.',
        },
        faq: {
          title: 'Sıkça Sorulan Sorular',
          text: 'S: Dili nasıl değiştirebilirim?\nC: /settings komutunu veya web yönetim panelimizi kullanın.',
        }
      }
    }
  };

  const currentWiki = wikiData[lang] || wikiData.en;
  const content = currentWiki.content[activeSection];

  return (
    <>
      <Navbar />
      <main className={styles.wikiContainer}>
        <div className={styles.wikiHeader}>
          <div className={styles.headerGlow}></div>
          <h1>{currentWiki.sidebar.find(s => s.id === 'intro').title} Wiki</h1>
          <p>Everything you need to know about Veyronix</p>
        </div>

        <div className={styles.wikiLayout}>
          {/* Sidebar */}
          <aside className={`${styles.sidebar} glass-panel`}>
            {currentWiki.sidebar.map(item => (
              <button 
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`${styles.navItem} ${activeSection === item.id ? styles.active : ''}`}
              >
                {item.icon}
                <span>{item.title}</span>
                <ChevronRight size={16} className={styles.chevron} />
              </button>
            ))}
          </aside>

          {/* Content Area */}
          <article className={`${styles.content} glass-panel`}>
            <div className={styles.contentInner}>
              <h2 className={styles.contentTitle}>{content.title}</h2>
              <div className={styles.contentText}>
                {content.text.split('\n').map((line, i) => (
                  <p key={i} style={{ marginBottom: '1rem' }}>{line}</p>
                ))}
              </div>
              
              <div className={styles.placeholderNote}>
                <Book size={48} opacity={0.1} />
                <p>Wiki içeriği yakında detaylandırılacaktır. Bölümünüzü seçmeye devam edin.</p>
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
