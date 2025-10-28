// src/app/event/data/eventsData.ts
export interface EventData {
    slug: string;
    title: string;
    date: string;
    severity: string;
    description: string;
    // 'html' holds ready-to-render HTML (we use simple paragraphs/lists)
    html: string;
  }
  
  export const eventsData: EventData[] = [
    {
      slug: "f5-breach",
      title: "F5 Breach: A Nation-State Attack on Critical Infrastructure",
      date: "October 2025",
      severity: "Critical",
      description:
        "2.5M records compromised via web application vulnerability in F5 BIG-IP.",
      html: `
        <h3>Overview</h3>
        <p>On October 3, 2025, a sophisticated attack attributed to a likely nation-state actor targeted F5’s infrastructure systems, exploiting a zero-day vulnerability in their BIG-IP product and compromising highly sensitive data. The breach resulted in unauthorized access to confidential government and critical business records across multiple regions. The attack’s scope and repercussions indicate severe financial, operational, and reputational impacts, with ongoing investigations linking the intrusion methods to an advanced, well-resourced adversary. No direct identification of the attacker group has been publicly confirmed as of this writing, though attribution points strongly to a nation-state interest.</p>
  
        <h3>Background</h3>
        <p>F5 is a leading provider of application delivery and network security solutions, serving major critical infrastructure sectors globally, including government, energy, and finance. The organization manages sensitive operational technology and data for multiple high-profile clients, making it an attractive target for advanced persistent threats (APTs). Sector-wide, attacks on infrastructure and cybersecurity vendors have surged by over 60% in 2025, with increasing hostility attributed to nation-state actors targeting supply chain weaknesses and operational control systems.</p>
  
        <h3>Timeline of Events</h3>
        <table>
          <tbody>
            <tr><td><strong>Sept 28</strong></td><td>Suspicious access patterns detected on centralized admin portals</td></tr>
            <tr><td><strong>Sept 30</strong></td><td>Internal security monitoring flagged abnormal configuration changes</td></tr>
            <tr><td><strong>Oct 3</strong></td><td>Forensic investigation initiated; zero-day vulnerability identified</td></tr>
            <tr><td><strong>Oct 4</strong></td><td>Breach confirmed with 2.5 million records compromised</td></tr>
            <tr><td><strong>Oct 6</strong></td><td>F5 issued public disclosure and began regulatory notifications</td></tr>
            <tr><td><strong>Oct 7</strong></td><td>Containment and incident response process started</td></tr>
          </tbody>
        </table>
  
        <h3>Technical Stuff</h3>
        <ol style="list-style-type:disc;">
          <li><strong>Attack Vector:</strong>  The attackers exploited a previously unknown vulnerability in F5’s BIG-IP platform, enabling unauthorized command execution via web API interfaces.</li>
          <br>
          <li><strong>Vulnerabilities Exploited:</strong> A zero-day RCE (Remote Code Execution) flaw affecting versions 17.x and below; CVE identifier pending official release.</li>
          <br><li><strong>Systems/Platforms Affected:</strong> On-premises and cloud-managed BIG-IP applications, including configurations supporting national infrastructure and large enterprise deployments.</li>
          <br><li><strong>Data Compromised:</strong> Personally identifiable information (PII), privileged credentials, infrastructure configuration files, security tokens, and encrypted communication logs.</li>
          <br><li><strong>Detection Method:</strong> Detected via internal anomaly alerting and corroborated by external monitoring partners tracking dark web chatter for new exploit techniques.</li>
          <br><li><strong>Persistence / Lateral Movement:</strong> Attackers used encrypted channels and privilege escalation strategies to move laterally within network segments, avoiding signature-based detection.</li>
          <br><li><strong>Indicators of Compromise (IOCs):</strong> Malicious API calls from masked VPNs, hashes associated with custom malware, and a series of breached administrative domains have been identified for threat hunting purposes.</li>
        </ol> 
  
        <h3>Impact Assessment</h3>
        <ol style="list-style-type:disc;">
          <li>Number of records/users affected: Approximately 2.5 million records.</li>
          <li>Financial losses / fines / compensation: Immediate losses exceed $60 million.</li>
          <li>Service downtime / operational disruption: Partial disruptions for up to 24 hours.</li>
          <li>Legal/regulatory implications: Ongoing GDPR, HIPAA, and national infrastructure investigations.</li>
        </ol>
  
        <h3>Response and Mitigation</h3>
        <ol style="list-style-type:disc;">
          <li>Company’s official statement and immediate actions: F5 promptly acknowledged the breach, implemented emergency patches, and collaborated with cybersecurity partners for containment.</li>
          <li>Forensic investigation outcomes: Discovery of zero-day exploitation and evidence of highly skilled adversarial tactics; incident escalated to national authorities.</li>
          <li>Notifications to regulators/customers: Prompt notification procedures to all affected clients and regulatory bodies.</li>
          <li>Partnerships: Engaged external cybersecurity consulting firms and government agencies for advanced threat analysis.</li>
          <li>Long-term mitigation: Enhanced anomaly detection, scheduled audits, password resets, and comprehensive patch management.</li>
        </ol>
  
        <h3>Attribution</h3>
        <p>Attribution remains under analysis; indicators point to a suspected nation-state APT group. Confidence remains cautious.</p>
  
        <h3>Expert Commentary</h3>
        <p>Industry experts highlighted the growing sophistication of nation-state campaigns against infrastructure vendors. Independent analysis suggests urgent need for sector-wide collaboration.</p>
  
        <h3>Lessons Learned / Recommendations</h3>
        <ul style="list-style-type:circle;">
          <li>Implement stronger access control policies, especially on administrative endpoints.</li>
          <li>Conduct regular automated vulnerability assessments and penetration testing.</li>
          <li>Validate and frequently test backup and disaster recovery processes.</li>
          <li>Enhance security awareness training.</li>
        </ul>
  
        <h3>References</h3>
        <ul style="list-style-type:squa;">
          <li>Official F5 breach notifications and press releases (October 2025).</li>
          <li>The Hacker News, BleepingComputer, Dark Reading.</li>
          <li>CISA and NIST advisories.</li>
        </ul>
      `,
    },
  //=================================================================================
    // a second sample event
    {
        slug: "fortinet-ssl-vpn-brute-force",
        title: "Fortinet SSL VPNs Targeted by Coordinated Brute-Force Attack",
        date: "August 2025",
        severity: "High",
        description: "Enterprise Edge Under Siege Globally",
        html: `
        <h2>CYBERSECURITY - EVENTS</h2>
        <h1>Fortinet SSL VPNs Targeted by Coordinated Brute-Force Attack: Enterprise Edge Under Siege Globally</h1>
      
        <h3>Overview</h3>
        <p>On August 3, 2025, cybersecurity researchers documented a major increase in brute-force attacks targeting Fortinet SSL VPN devices worldwide. Over 780 unique IP addresses participated in the coordinated effort to breach these VPNs, affecting organizations in the United States, Hong Kong, Brazil, Spain, and Japan. The incident reflects a deliberate targeting of Fortinet's edge devices, with evidence of attacker adaptation and ongoing threat actor interest in exploiting vulnerabilities across remote access infrastructure.</p>
      
        <h3>Background / Context</h3>
        <p>Fortinet is a leading provider of firewall and VPN solutions used extensively to protect enterprise networks, government agencies, and critical remote access infrastructure. Its FortiOS and FortiManager platforms are trusted for high security and reliability. As enterprise edge technologies have become primary gateways for remote work and cloud access, they have drawn increasing attention from sophisticated threat actors, with brute-force campaigns often presaging or accompanying new CVE (Common Vulnerabilities and Exposures) disclosures. Prior incidents involving Fortinet devices have highlighted persistent global targeting, underscoring the strategic importance of robust defenses around VPNs and edge network tools.</p>
      
        <h3>Timeline of Events</h3>
        <table>
          <tr><td>June 2025</td><td>Early spike in brute-force activity fingerprinting FortiGate device</td></tr>
          <tr><td>Aug 3</td><td>Major coordinated brute-force wave against Fortinet SSL VPNs detected</td></tr>
          <tr><td>Aug 5</td><td>Sudden attack shift: new TCP signature targets FortiManager service</td></tr>
          <tr><td>Aug 6</td><td>56 new IP addresses flagged as actively malicious in latest campaign</td></tr>
          <tr><td>Aug 7</td><td>Full industry alert and investigation by GreyNoise and threat intelligence firms</td></tr>
        </table>
      
        <h3>Technical Details of the Breach</h3>
        <ul>
          <li><strong>Attack Vector:</strong> Systematic brute-force authentication attempts against Fortinet SSL VPN login interfaces, leveraging automated attack infrastructure originating from hundreds of IPs worldwide.</li>
          <li><strong>Vulnerabilities Exploited:</strong> No confirmed CVE exploited at the time, but historical patterns suggest an imminent vulnerability disclosure may follow.</li>
          <li><strong>Systems/Platforms Affected:</strong> FortiOS SSL VPN and FortiManager administration endpoints used for centralized policy management.</li>
          <li><strong>Data Compromised:</strong> No public disclosure of a successful compromise, but exposed systems risk unauthorized access, credential theft, and lateral movement.</li>
          <li><strong>Detection Method:</strong> Activity flagged by GreyNoise and other partners via anomaly detection.</li>
          <li><strong>Persistence / Lateral Movement:</strong> Attackers demonstrated capability to shift targets (from FortiOS to FortiManager).</li>
          <li><strong>Indicators of Compromise (IOCs):</strong> Malicious authentication attempts from 780+ unique IPs, distinctive TCP and client signatures changing over the campaign’s lifecycle.</li>
        </ul>
      
        <h3>Impact Assessment</h3>
        <ol>
          <li><strong>Number of records/users affected:</strong> Not quantified; systemic risk to organizations running vulnerable configurations.</li>
          <li><strong>Financial losses / fines / compensation:</strong> No direct figures disclosed; potential costs include incident response and downtime.</li>
          <li><strong>Service downtime / operational disruption:</strong> No widespread outages reported, but systems are critical for secure access.</li>
          <li><strong>Legal/regulatory implications:</strong> Potential compliance risks (GDPR, HIPAA, PCI DSS) if exploited.</li>
          <li><strong>Reputational / trust impact:</strong> Heightened scrutiny and patching urgency among enterprises.</li>
        </ol>
      
        <h3>Response and Mitigation</h3>
        <p>Fortinet is actively monitoring and investigating the brute-force wave; pending official updates and recommendations.</p>
        <ul>
          <li>GreyNoise and others have tracked campaign signatures and issued advisories.</li>
          <li>Security advisories distributed by Fortinet and leading threat intel firms.</li>
          <li>Ongoing collaborative monitoring, mitigation advisories released globally.</li>
          <li>Organizations advised to enforce MFA and apply latest patches immediately.</li>
        </ul>
      
        <h3>Attribution</h3>
        <ul>
          <li><strong>Attacker group identified:</strong> None confirmed.</li>
          <li><strong>Evidence linking them:</strong> Coordinated, well-resourced global infrastructure pattern (IPs across US, Canada, Russia, Netherlands).</li>
          <li><strong>Level of confidence:</strong> Unverified; investigations ongoing.</li>
        </ul>
      
        <h3>Expert or Third-Party Commentary</h3>
        <blockquote>“This was not opportunistic, it was focused activity.” — GreyNoise Threat Intelligence</blockquote>
        <p>Analysts note a recurring pattern: brute-force surges often precede new CVE disclosures. Security blogs including The Hacker News, CISA, and NIST continue to issue related guidance.</p>
      
        <h3>Lessons Learned / Preventive Measures</h3>
        <p>Brute-force remains a persistent and effective method against systems lacking strong password hygiene or MFA.</p>
        <ul>
          <li>Implement robust access controls and enforce MFA on all VPN endpoints.</li>
          <li>Monitor logs and block malicious IPs aggressively.</li>
          <li>Patch and audit all edge devices regularly.</li>
          <li>Run continuous vulnerability scans on internet-facing systems.</li>
        </ul>
      
        <h3>References & Sources</h3>
        <ul>
          <li>The Hacker News (Aug 2025)</li>
          <li>GreyNoise Threat Intelligence — Early Warning Signals report (Aug 2025)</li>
          <li>CISA, NIST, Fortinet advisories (2025)</li>
          <li>Ongoing coverage: Dark Reading, BleepingComputer</li>
        </ul>
        `,
      },


      {
        slug: "adobe-aem-cve-2025-54253",
        title: "Adobe AEM Flaw Added to CISA Exploited Vulnerabilities List",
        date: "October 2025",
        severity: "Critical",
        description: "CVE-2025-54253 enables full remote code execution with CVSS 10.0.",
        html: `
          <h3>Overview</h3>
          <p>On October 15, 2025, the U.S. Cybersecurity and Infrastructure Security Agency (CISA) classified a maximum-severity vulnerability in Adobe Experience Manager (AEM) Forms on JEE as actively exploited, due to the flaw's capability for authentication bypass and arbitrary code execution (CVSS score: 10.0). Tracked as CVE-2025-54253, this misconfiguration exposed millions of enterprise and government deployments to direct compromise. Adobe has patched the issue, but given a working public exploit and evidence of widespread targeting, organizations are urged to urgently update all affected systems.</p>
    
          <h3>Background / Context</h3>
          <p>Adobe Experience Manager is a leading enterprise content management and workflow platform, extensively used by government, media, banking, and Fortune 500 companies for digital assets and forms automation. Previous AEM vulnerabilities have posed risks, but CVE-2025-54253 is unprecedented, enabling remote attackers to fully override system controls. This flaw specifically impacts versions 6.5.23.0 and earlier of AEM Forms on JEE.</p>
    
          <h3>Timeline of Events</h3>
          <table>
            <tr><td>July 2025</td><td>Vulnerability disclosed by Searchlight Cyber researchers</td></tr>
            <tr><td>Aug 2025</td><td>Adobe releases patch for CVE-2025-54253 (v6.5.0-0108)</td></tr>
            <tr><td>Oct 2025</td><td>Active exploitation detected, proof-of-concept published</td></tr>
            <tr><td>Oct 15, 2025</td><td>CISA adds CVE-2025-54253 to KEV catalog</td></tr>
            <tr><td>Nov 5, 2025</td><td>Agencies mandated to patch affected systems</td></tr>
          </table>
    
          <h3>Technical Details of the Breach</h3>
          <ul style="list-style-type:disc;>
            <br><li><strong>Attack Vector:</strong> Authentication bypass chained to remote code execution via Struts2 devmode, accessible via /adminui/debug servlet.</li>
            <br><li><strong>Vulnerabilities Exploited:</strong> CVE-2025-54253 (RCE via OGNL injection) and CVE-2025-54254 (XXE injection).</li>
            <br><li><strong>Systems Affected:</strong> AEM Forms on JEE v6.5.23.0 and earlier.</li>
            <br><li><strong>Persistence:</strong> Full compromise possible; arbitrary command execution enabled.</li>
            <br><li><strong>IOCs:</strong> Requests toward /adminui/debug, OGNL payloads, unauthorized commands.</li>
          </ul>
    
          <h3>Impact Assessment</h3>
          <ol>
            <li>Millions of enterprise/government users affected.</li>
            <li>Financial exposure: tens of millions in losses and fines.</li>
            <li>Potential full system compromise with service disruption.</li>
            <li>Strict patch compliance mandated by November 2025.</li>
          </ol>
    
          <h3>Response and Mitigation</h3>
          <ul>
            <li>Adobe released critical updates in August 2025.</li>
            <li>CISA and JVN issued advisories highlighting exploitation.</li>
            <li>Organizations urged to upgrade to v6.5.0-0108 or newer.</li>
            <li>Ongoing monitoring for debug servlet access recommended.</li>
          </ul>
    
          <h3>Attribution</h3>
          <p>Exploitation is opportunistic and widespread with no single group identified; FireCompass confirmed active global scanning.</p>
    
          <h3>Expert Commentary</h3>
          <p>Security researchers from Searchlight Cyber, FireCompass, and Adobe Security urged mandatory updates and endpoint validation across AEM deployments.</p>
    
          <h3>Lessons Learned / Recommendations</h3>
          <ul>
            <li>Patch and validate all servlet endpoints immediately.</li>
            <li>Enforce MFA on admin interfaces and monitor admin/debug access.</li>
            <li>Perform routine middleware vulnerability scanning and code review.</li>
          </ul>
    
          <h3>References</h3>
          <ul>
            <li>The Hacker News, “CISA Flags Adobe AEM Flaw with Perfect 10.0 Score” (Oct 2025).</li>
            <li>Adobe Security Advisory (Aug 2025).</li>
            <li>CISA KEV Catalog and JVN advisories.</li>
          </ul>
        `,
      },
    
      {
        slug: "sidecopy-apt36-india-campaign",
        title: "Pakistan-Linked Hackers Escalate Targeting of Indian Critical Sectors",
        date: "April 2025",
        severity: "High",
        description:
          "SEQRITE reports SideCopy/APT36 attacking Indian railway, oil, gas, and external affairs ministries using advanced RATs.",
        html: `
          <h3>Overview</h3>
          <p>Between December 2024 and April 2025, SEQRITE attributed a series of cyberattacks on India's railway, oil and gas, and external affairs ministries to a Pakistan-linked threat group operating sub-clusters such as SideCopy and APT36. These adversaries deployed advanced RAT families like Xeno RAT, Spark RAT, and CurlBack RAT, marking expanded campaigns beyond previous defense-focused activity.</p>
    
          <h3>Background / Context</h3>
          <p>APT36 (Transparent Tribe) is known for cyber-espionage targeting South Asian military and government sectors. SideCopy, a sub-cluster of APT36, broadened operations from government and defense to national infrastructure entities, using phishing lures resembling official documents and sector advisories to infiltrate critical systems.</p>
          
          <h3>Timeline of Events</h3>
          <table>
            <tr><td>June 2024</td><td>SideCopy launches obfuscated HTA attacks mimicking SideWinder campaigns</td></tr>
            <tr><td>Dec 2024</td><td>SEQRITE detects attacks on Indian railway, oil/gas, and external affairs ministries</td></tr>
            <tr><td>Early 2025</td><td>Shift from HTA files to MSI package-based malware deployment</td></tr>
            <tr><td>Apr 2025</td><td>Discovery of CurlBack RAT and wider attacks confirmed</td></tr>
          </table>
    
          <h3>Technical Details</h3>
          <ul>
            <li><strong>Attack Vector:</strong> Phishing emails with malicious HTA/MSI attachments.</li>
            <li><strong>Vulnerabilities Used:</strong> DLL side-loading, reflective loading, PowerShell AES decryption.</li>
            <li><strong>Targets:</strong> Government and critical infrastructure systems (Windows and Linux).</li>
            <li><strong>Payloads:</strong> CurlBack RAT, Spark RAT, Xeno RAT, ReverseRAT, Geta, Cheex, and USB stealer variants.</li>
            <li><strong>Data Compromised:</strong> Documents, credentials, browser data, and sensitive images.</li>
          </ul>
    
          <h3>Impact Assessment</h3>
          <ol>
            <li>Multiple Indian ministries targeted; extent undisclosed.</li>
            <li>High national security and operational integrity risk.</li>
            <li>Espionage-level exposure of diplomatic communications.</li>
          </ol>
    
          <h3>Response and Mitigation</h3>
          <ul>
            <li>Indian CERT, SEQRITE, and partners strengthened endpoint detection.</li>
            <li>Security advisories issued on SideCopy/APT36 activity.</li>
            <li>Incident response guided by behavioral analytics and proactive defense updates.</li>
          </ul>
    
          <h3>Attribution</h3>
          <p>Attribution confirmed to SideCopy (APT36), based on code reuse, TTP overlap, and shared payloads aligned with Pakistan-linked APT clusters.</p>
    
          <h3>Expert Commentary</h3>
          <p>Researchers emphasize advancing sophistication of SideCopy campaigns, calling for greater vigilance across critical infrastructure and defense-adjacent sectors.</p>
    
          <h3>Lessons Learned / Recommendations</h3>
          <ul>
            <li>Enforce anti-phishing measures and restrict unsigned MSI execution.</li>
            <li>Perform regular patching and security audits for cross-platform RAT detection.</li>
            <li>Isolate sensitive systems, employ behavioral monitoring and PowerShell control policies.</li>
          </ul>
    
          <h3>References</h3>
          <ul>
            <li>The Hacker News, “Pakistan-Linked Hackers Expand Targets in India” (Apr 2025).</li>
            <li>SEQRITE and CERT-In Reports (Dec 2024 – Apr 2025).</li>
            <li>FireEye, SideWinder, and Spark RAT advisories.</li>
          </ul>
        `,
      }
      
  ];
  