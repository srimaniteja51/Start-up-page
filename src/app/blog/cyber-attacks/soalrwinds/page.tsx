'use client';

import ReactMarkdown from 'react-markdown';

export default function WannaCryBlog() {
  const markdown = `
Introduction:
In December 2020 the cybersecurity world was rocked by one of the cleverest attacks ever: attackers hid a backdoor inside a routine software update for SolarWinds’ Orion network-monitoring tool. For months the malicious “Sunburst” code lurked silently in thousands of organizations, only revealing itself after snowballing into a full-blown cyber-espionage campaign. It’s like discovering that your trusted software update was actually a Trojan Horse carrying spies into your network! In this blog we’ll unpack the story step-by-step – how the SolarWinds supply chain was breached, how the Sunburst malware operated (complete with code snippets), who was hit, and what happened afterward. 

Background:
SolarWinds is a Texas-based company whose Orion software monitors IT networks – used by many private companies and even U.S. government agencies. In early 2020 an advanced adversary (later attributed to Russia’s intelligence service) managed to slip malicious code into SolarWinds’ build process. When SolarWinds digitally signed and distributed its normal Orion update, the update secretly carried the Sunburst backdoor.Because the update was officially signed, customers unwittingly installed a seemingly-trusted program with built-in malware. FireEye (now part of Mandiant) discovered the breach on Dec. 13, 2020 and named the intruders “UNC2452” (also known as APT29 or Nobelium). US officials quickly blamed the Russian SVR agency for the hack. SolarWinds says the first infected update went out on March 26, 2020 and the breach wasn’t publicly known until Dec. 12, 2020 meaning Sunburst hid undetected for nine months! During that time, roughly 18,000 organizations may have downloaded the tainted update, although only a few dozen were targeted with follow-on attacks.

How the Attack Worked
The attackers didn't break into SolarWinds—they hijacked the company's own software factory. Starting around October 2019, nation-state hackers planted malware called "Sunspot" directly onto SolarWinds' build servers. When engineers compiled new versions of the Orion software (using TeamCity CI/CD servers), Sunspot would quietly watch for a specific file being built: SolarWinds.Orion.Core.BusinessLayer.dll. At just the right moment, it would swap in a malicious version containing the "Sunburst" backdoor, let the build system digitally sign it as legitimate SolarWinds code, and then restore everything to hide its tracks. The result? Poisoned software updates that looked completely official, complete with valid digital signatures that passed every security check.
Between March and June 2020, roughly 18,000 organizations installed these trojanized updates, unknowingly giving attackers a backdoor into their networks. Once installed, Sunburst stayed dormant for 12-14 days to avoid detection, then quietly "phoned home" by generating unique DNS requests that looked like normal Orion traffic. The backdoor disguised its communications to blend in with legitimate software telemetry, making it nearly impossible to spot. On high-value targets—like government agencies—the attackers deployed a second-stage payload called "Teardrop" that loaded Cobalt Strike beacons directly into memory, leaving no files on disk. This gave them full remote control to steal credentials, escalate privileges, and move laterally across networks while remaining virtually invisible.
The sophistication was staggering: fake image files containing encrypted payloads, renamed Windows tools to avoid suspicion, and a "Golden SAML" technique that let attackers forge authentication tokens and impersonate any user without needing passwords. By the time Microsoft and FireEye discovered the breach in December 2020, the attackers had been inside victim networks for nearly nine months, quietly exfiltrating data from some of the most sensitive organizations in the world.
The lasting lesson? Security isn’t just about defending networks—it’s about securing every stage of the software lifecycle, from code commits to signed releases.

Impact:
The fallout was huge. Tens of thousands of organizations installed the compromised update (SolarWinds warns up to 18,000 possible customers). In practice, only a small fraction were chosen for deeper attack. FireEye and others identified roughly 100 high-value victims who got the full “second-stage” treatment. These included U.S. federal agencies (Treasury, Commerce, State, Homeland Security, and many others), defense contractors, tech firms, and cybersecurity companies (e.g. FireEye itself was breached, as was Mimecast, Malwarebytes, Microsoft, Cisco, and CrowdStrike). The goal was clearly espionage: stealing emails, source code, and network credentials. Notably, Microsoft reported the intruders viewed portions of its source code but “didn’t alter it”.


Aftermath and Response:
The response was massive. SolarWinds replaced its CEO and rebuilt its development pipeline from scratch.Sunburst spurred new rules. In May 2021 President Biden signed an Executive Order on cybersecurity that specifically targets software supply chains. This EO requires government software vendors to produce SBOMs (Software Bill of Materials) and adhere to secure development practices. In plain terms: products sold to the government must now come with transparency about what code they contain, and firms are incentivized to “build security in” during development. In industry, threat-hunting tools were updated: Microsoft Defender, FireEye products, and other AV vendors added new signatures and heuristics for Sunburst/Teardrop.



Preventive Measures:
For students and security teams, the SolarWinds hack drives home that supply-chain security is vital. Here are some key takeaways and best practices:
Verify software integrity. Always download updates from official sources and validate their digital signature before installing. As OWASP advises, never use a component unless its signature checks out. If the attacker couldn’t break SolarWinds’ certificate, they still relied on the fact that no one was checking for unauthorized extra code. In your own projects, sign your code and harden your signing keys and never run build servers with unchecked internet access.


Harden builds pipelines. Isolate and snapshot your CI/CD systems. SolarWinds forgot to wipe a VM snapshot, which later helped investigators find the injection code. Use ephemeral build VMs or containers that are destroyed after each build, to prevent trojans from persisting. Track all build scripts and configurations in version control with peer reviews. Remove unnecessary services or permissions on build machines.


Use private repositories and dependency management. Don’t blindly pull code or binaries from public sources without checks. A private artifact repository ( lets you vet code before it’s consumed. Generate and maintain an SBOM for your products so you know exactly what goes into them. If a supplier provides an update, compare it to the previous version to see if anything unexpected changed.


Network defense and monitoring. Segment critical systems and minimize Internet exposure. After Sunburst, agencies were told to block Orion servers from the public net. Use firewalls or proxies to restrict egress so if a backdoor tries to phone home, it can be caught. Monitor DNS and HTTP traffic for weird domains. Implement full packet inspection or use anomaly-detection to flag new remote hosts or C2 patterns.


Defense-in-depth. Even with supply-chain attacks, layered security can help. Tools like EDR (endpoint detection and response) might catch anomalous process behavior. Strictly apply least privilege: the SolarWinds manager ran with admin rights on many networks. If its access had been more limited, even a backdoor would have less impact. Conduct regular incident-response drills and assume that a breach can hide behind legitimate processes.


Stay informed. Sunburst demonstrated the value of threat intelligence sharing. Follow security advisories. As soon as the attack became public, many IOCs and YARA rules were published. Patching in weeks, not months, can turn the tide. For instance, SolarWinds quickly released a hotfix that removed the backdoor patching to a clean version was critical.


In summary, the SolarWinds Sunburst saga teaches that trust but verify must apply even to trusted vendors. Security-minded developers should demand transparency and auditability in their supply chain (SBOMs, code reviews, etc.), and defenders should assume even vendor-signed software can be compromised. By combining careful code signing, hardened build practices, least-privilege operation, and vigilant monitoring, future students of cybersecurity can help prevent the next Sunburst.

`;

  return (
    <div className="min-h-screen bg-black text-[#f5f5dc] px-8 py-12 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-[#fdd023] text-center">
          SolarWinds / Sunburst Supply Chain attack
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
