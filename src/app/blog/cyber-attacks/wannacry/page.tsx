'use client';

import ReactMarkdown from 'react-markdown';

export default function WannaCryBlog() {
  const markdown = `
## 🚨 Introduction

On May 12, 2017, a ransomware attack began spreading automatically across the internet at unprecedented speed. Unlike typical ransomware that requires someone to click a malicious link, WannaCry was a worm—it jumped from computer to computer on its own, exploiting a Windows vulnerability that thousands of organizations had failed to patch. By the time security teams realized what was happening, over 200,000 machines across 150 countries were locked and encrypted, with ransom notes demanding Bitcoin payments flashing on screens from London hospitals to Chinese universities.

**The damage?** An estimated $4 billion worldwide. **The cause?** A perfect storm of stolen NSA hacking tools, unpatched systems, and a cybersecurity principle ignored: if you don't patch your vulnerabilities, someone else will exploit them.

## 🔍 Background

WannaCry used a worm-capable exploit called **EternalBlue**, which targeted the Windows SMBv1 protocol (srv2.sys). EternalBlue (CVE-2017-0144) was part of the NSA's toolkit and was leaked by the "Shadow Brokers"(who are thought to be the Russians) on April 14, 2017. Microsoft had actually patched the SMBv1 bug in March 2017 (MS17-010), but many organizations hadn't applied it. In fact, older Windows systems like XP and Server 2003 – which had no patch since 2014/2015 – were especially at risk.

WannaCry was unusual because it blended ransomware with worm-like spreading. It didn't rely on phishing emails or attachments – instead it actively scanned for vulnerable hosts. In effect, it was like a "thief" that walked through the network knocking on every door. A Cloudflare report notes that most ransomware normally spreads via email or botnets, but WannaCry uniquely combined ransomware with an NSA-created worm vulnerability.

## ⚔️ The Attack

WannaCry became one of the most devastating cyberattacks in history by combining ransomware with worm-like propagation. Its secret weapon was an exploit known as **EternalBlue**, a powerful tool allegedly developed by the NSA and later leaked by a hacker group called the Shadow Brokers. EternalBlue targeted a critical vulnerability in the Windows Server Message Block (SMB) protocol, specifically SMBv1, allowing attackers to execute arbitrary code remotely — without any user interaction. In essence, attackers could simply send specially crafted packets to a vulnerable Windows system and gain full control.

Microsoft had actually patched this flaw two months before the outbreak through the MS17-010 security update, but thousands of organizations worldwide had not applied it. This negligence became catastrophic.

Once WannaCry infected its initial victim — most likely through a phishing email — it unleashed its worm capabilities. It began scanning for other vulnerable machines both on local networks and across the internet. Upon finding one, it exploited EternalBlue to gain entry, deployed another NSA tool called **DoublePulsar** as a backdoor, and dropped its ransomware payload. The malware then encrypted files using AES-128 encryption and displayed the now-infamous ransom note demanding $300–$600 in Bitcoin for file recovery.

Unlike traditional ransomware that remains confined to individual systems, WannaCry spread autonomously, rapidly infecting over 200,000 computers across more than 150 countries within days. Hospitals, factories, government offices, and major corporations were crippled, leading to damages estimated in the billions of dollars.

**Ironically, the attack's global rampage ended because of a built-in kill switch.** The malware attempted to connect to a long, nonsensical domain name — if the domain was live, WannaCry would stop executing. Security researcher Marcus Hutchins noticed this behavior and registered the domain for roughly $10, unintentionally halting the outbreak. It's believed the attackers added the domain as a sandbox detection mechanism, never expecting someone to register it.

Despite its massive scale, the attackers reportedly earned only around $140,000, as most victims refused to pay and the kill switch curtailed further infections.

WannaCry served as a wake-up call for the cybersecurity world. It exposed how dangerous leaked government-grade exploits could become when combined with unpatched, legacy systems. Organizations running outdated Windows versions like Windows XP or unpatched Windows 7 were among the hardest hit.

## 🛡️ Aftermath and Response

Within a day of the outbreak, security teams worldwide scrambled to respond. The big turning point was Marcus Hutchins' discovery of the kill-switch domain – he registered it for about $11, which immediately caused all active WannaCry instances to stop encrypting. While that didn't decrypt already-locked machines, it slowed the spread globally and bought time. Law enforcement quickly warned victims not to pay the ransom (there was no evidence any paid victims got their files back). By mid-June 2017 about 327 payments had gone through, totaling ~$130k, which was considered very low given the scale.

Microsoft reacted strongly. The day after the attack, Microsoft issued out-of-band patches for unsupported Windows versions (XP, Server 2003, and even Windows 8) – operating systems that were thought to be unfixable outside of custom support. They urged every organization to install the MS17-010 patch immediately. The outage also sparked investigations – by late 2017 both US and UK officials publicly blamed North Korea (specifically the Lazarus Group) for WannaCry, though some researchers note the evidence is debated. (As a curious footnote, the British researcher who saved the world – Marcus Hutchins – was later arrested for unrelated malware development, showing the strange twists of the cyber world.)

## 🔒 Preventive Measures

WannaCry taught some hard lessons. The immediate cure is simple in theory: **patch your systems and maintain good backups**. Zero-trust architectures and least-privilege policies also help – treat every device on the network as potentially hostile. In fact, one lesson from WannaCry is that no network is truly walled off.

In sum, WannaCry was a wake-up call about old vulnerabilities and patching. Its mix of NSA-derived exploits, a global worm, and even a built-in kill-switch makes it one of the most instructive cyberattacks to date. Cybersecurity students can learn a lot by dissecting what went right (the kill switch, community response) and what went wrong (unpatched systems, legacy OS use) in this notorious 2017 incident.
`;

  return (
    <div className="min-h-screen bg-black text-[#f5f5dc] px-8 py-12 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-[#fdd023] text-center">
          WannaCry: The 2017 Ransomware Outbreak
        </h1>

        <div className="prose prose-invert max-w-none text-[#f5f5dc] text-justify leading-relaxed prose-h2:text-2xl prose-h2:font-bold prose-h2:text-[#fdd023] prose-h2:mt-8 prose-h2:mb-4 prose-h2:border-b prose-h2:border-[#fdd023]/30 prose-h2:pb-2 prose-p:text-lg prose-p:mb-4 prose-strong:text-[#f5f5dc] prose-strong:font-semibold">
          <ReactMarkdown>
            {markdown}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
