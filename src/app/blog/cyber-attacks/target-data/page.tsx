'use client';

import ReactMarkdown from 'react-markdown';

export default function WannaCryBlog() {
  const markdown = `
Introduction:
Picture this: Black Friday 2013. Millions of Americans are swiping their credit cards at Target stores, hunting for holiday deals. What they don't know? Hackers are watching every single transaction. By the time Target discovered the breach weeks later, 40 million payment cards and 70 million personal records had been stolen making it one of the most devastating retail security breaches in history.

Background:
Target Corporation was a U.S. retail chain with about 1,800 stores in 2013. In mid-December 2013 the company announced a massive data breach: 40M payment cards and 70M personal records had been compromised.It turned out that attackers had quietly entered Target’s network around November 15, 2013 by using stolen credentials from Fazio Mechanical Services, a small Pennsylvania HVAC vendor contracted by Target.Those stolen credentials unlocked a portal on Target’s network, and over the following weeks the intruders exfiltrated customer data from point-of-sale systems. Target discovered the breach by Dec 15 and publicly disclosed it on Dec 19, 2013.

How the Attack Worked:
Initial Compromise (Vendor Phishing) – Attackers targeted a third-party HVAC vendor (Fazio Mechanical) with a spear-phishing email. A Fazio employee’s computer was infected with a known trojan (often identified as Citadel) that harvested login credentials from the machine. Crucially, Fazio had remote access to a Target web portal (used for billing and maintenance tasks) but ran only a free anti-malware tool. The attackers later noted that if Fazio had used a paid, real-time antivirus scanner, Citadel might have been caught immediately. With the stolen credentials, the hackers logged into Target’s vendor portal as if they were legitimate contractors.


Lateral Movement & Privilege Escalation – Through the portal, the attackers were able to upload a malicious web shell to Target’s servers. This web shell gave them remote command-line access to internal machines. Using that foothold, they harvested Windows password hashes (exploiting Target’s single-sign-on setup) and executed a “Pass-the-Hash” attack to obtain Domain Admin privileges. Once they had admin rights, they could roam freely because Target had failed to properly segment its network, the intruders could move from the vendor portal into the corporate LAN and eventually into the payment-processing systems. (A Senate report later noted this lack of isolation as a critical failure.) 
In short: compromised vendor → web shell → steal admin hash → domain admin → full network control.


Deployment of POS Malware (BlackPOS/Kaptoxa) – With Domain Admin in hand, the attackers deployed specialized malware onto Target’s point-of-sale terminals. This malware was a variant of the BlackPOS family (codenamed Kaptoxa or Trojan.POSRAM). It was installed on roughly 40,000 of Target’s 60,000 cash registers. The malware attached itself to the POS process and continuously scraped memory for unencrypted magnetic-strip data as customers swiped cards. Whenever a card was swiped, its contents (card number, expiration, etc.) existed briefly in the machine’s RAM – and that’s exactly what BlackPOS grabbed. The stolen data was written to hidden files on the POS terminals.


Data Exfiltration – Once collected, the payment card data had to be moved off Target’s network. The malware was programmed to perform a multi-stage exfiltration. First, it opened a hidden NetBIOS share from the POS network to a staging server inside Target’s LAN. Every few hours, if the clock was between about 10 a.m. and 5 p.m., the POS terminals would batch-encrypt their accumulated card dumps and send them over this internal share to a central repository. From there, the attackers siphoned the data out of Target to servers they controlled. Investigators later discovered that the stolen data was forwarded to at least two “drop” servers – one in Miami and one in Brazil – before finally being aggregated on a command-and-control server (reported in Russia). 
In short: memory-scrape on registers → internal file share to staging server → FTP (or similar) out to external drop sites.


Throughout this attack, Target’s monitoring did generate alerts (for example, their FireEye intrusion system detected suspicious malware), but regrettably those alerts were ignored by the operations team.Also, many opportunities to stop the attack were missed. A Senate committee later noted that Target “failed to respond to multiple automated warnings” about the malware and about the data exfiltration, and that the lack of network segmentation allowed the attackers to reach sensitive systems with ease.

Impact:
Data Stolen: Over 40 million credit and debit card accounts and 70 million personal records (names, addresses, emails, phone numbers) were stolen. Nearly every U.S. Target store was affected during peak holiday shopping.


Financial Hit: Direct costs to Target (for security upgrades, legal fees, settlements, etc.) exceeded $200 million. Industry estimates (including card re-issuance, fraud reimbursement, fines, and monitoring programs) ran as high as $300–$400 million. Target’s Q4 2013 profit plunged (approximately a 46% drop year-over-year) as holiday sales fell by about 2–6% after the breach.


Customer Fallout: All affected customers got new credit cards (banks replaced millions of cards at substantial cost). Target offered victims one year of free credit monitoring and promised zero liability for any fraudulent charges. However, consumer trust was badly shaken – many shoppers avoided Target stores after the announcement, and customer credit bureaus reported spikes in identity-theft concerns.


Legal and Regulatory: Target faced numerous lawsuits and fines. For example, Target agreed to a roughly $18.5 million settlement in a consumer class-action case. Card brands (Visa/Mastercard) fined Target for PCI non-compliance, and regulators scrutinized PCI-DSS standards. The breach led to stricter enforcement of multi-factor authentication for remote admin access.


Industry Response: This breach became a wake-up call across retail and finance. Payment networks accelerated the rollout of EMV chip-and-PIN cards (to prevent easy cloning of stolen magnetic-strip data). Businesses worldwide re-examined third-party risk management and network architecture after seeing how a single weak link can compromise an entire network.

Aftermath and Response:
In the wake of the breach, Target took several steps and underwent significant changes. They publicly apologized and offered affected customers free identity protection. The company overhauled its security: Target replaced key personnel, established a 24/7 Cyber Fusion Center for threat monitoring, and accelerated upgrades to chip-enabled checkout terminals. Congress and security agencies investigated the breach, and a Senate report highlighted Target’s missteps (granting excessive vendor privileges and ignoring network alerts). Meanwhile, U.S. law enforcement pursued leads on the attackers. Two Russian programmers behind BlackPOS (Rinat Shabayev and Sergey Taraspov) were later identified and charged by U.S. authorities for creating the malware, though they remained at large.

Preventive Measures:
The Target breach offers many lessons on defense-in-depth. In any organization, especially retail or hospitality, the following precautions can greatly reduce risk:
Harden Third-Party Access: Only give vendors the minimum access they need, and isolate their connections. Use strict network segmentation or a dedicated DMZ for vendor systems so they cannot reach sensitive databases or POS networks. Always require strong authentication (ideally multi-factor) for any external login.


Network Segmentation: Keep point-of-sale systems on a separate network segment or VLAN that is firewalled off from the corporate LAN. POS terminals should not share credentials or file shares with office computers. Proper segmentation would have made it much harder for attackers to jump from a vendor portal into the cash registers.


Endpoint Security: All computers – including contractors’ laptops – should run up-to-date endpoint protection with real-time scanning. In the Target case, the HVAC vendor’s PC was only running a free, on-demand Malwarebytes scanner, which did not catch the Citadel trojan until after the fact. A paid antivirus suite with active protection likely would have detected the malware immediately.


Least Privilege & Strong Authentication: Do not rely on a single administrator account or shared credentials. Disable or tightly control easy pass-the-hash paths (for example, avoid reusing passwords across systems or letting multiple systems store password hashes). Enforce strict least-privilege policies so that even if one account is compromised, it can’t roam freely.


Continuous Monitoring & Response: Invest in robust intrusion detection (IDS) and security information and event management (SIEM). Crucially, act on alerts. Target’s FireEye appliance did generate warnings about the malware, but the operations team failed to investigate. An effective SOC should treat any malware or odd traffic alert as high priority.


Data Encryption/Tokenization: Wherever possible, avoid keeping raw card data on disk. Newer POS systems can encrypt or tokenize credit card data immediately at swipe-time, so that even if memory is scraped, the stolen blobs are useless without the decryption key.


Zero Trust Mindset: Always assume that any part of the network can be compromised. The attackers exploited Target’s trust in its vendor network – a classic breach of the “weakest link” principle. A Zero Trust architecture would mean verifying every login and transaction, even if it appears to come from an internal or trusted source.


Regular Audits and Training: Finally, conduct frequent security audits of vendors and internal systems. Penetration tests and phishing drills can reveal gaps before attackers do. Ensure all staff (and contractors) are trained to spot phishing, and enforce policies like multi-factor login and automatic logouts.
By following these measures and keeping in mind the lessons from Target organizations can greatly reduce the chances of a similar breach. The Target hack of 2013 was a painful lesson in supply-chain risk and malware sophistication, but its legacy has driven stronger security practices industry-wide.
`;

  return (
    <div className="min-h-screen bg-black text-[#f5f5dc] px-8 py-12 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-[#fdd023] text-center">
          Target Data: The 2025 Ransomware Outbreak
        </h1>

        <div className="prose prose-invert max-w-none text-[#f5f5dc] text-justify leading-relaxed prose-h2:text-2xl prose-h2:font-bold prose-h2:text-[#fdd023] prose-h2:mt-8 prose-h2:mb-4 prose-h2:border-b prose-h2:border-[#fdd023]/30 prose-h2:pb-2 prose-h3:text-xl prose-h3:font-semibold prose-h3:text-[#fdd023]/90 prose-h3:mt-6 prose-h3:mb-3 prose-p:text-lg prose-p:mb-4 prose-strong:text-[#f5f5dc] prose-strong:font-semibold">
          <ReactMarkdown>
            {markdown}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
