"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../components/Navbar";

// ✅ Reusable Card Component
const Card = ({ title, image, onClick, children }: any) => (
  <div
    onClick={onClick}
    className={`rounded-2xl overflow-hidden shadow-lg bg-[#1a1a1a] border border-[#333333] 
    transition-all cursor-pointer hover:shadow-2xl hover:border-[#fdd023]`}
  >
    <div className="relative w-full h-40 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
      />
    </div>
    <div className="p-5">
      <h3 className="text-lg font-semibold text-[#fdd023] mb-2">{title}</h3>
      <p className="text-[#f5f5dc] text-sm">{children}</p>
    </div>
  </div>
);

// ✅ Reusable Button
const Button = ({ children, onClick, className = "" }: any) => (
  <button
    onClick={onClick}
    className={`px-6 py-2 rounded-full font-medium transition-all ${className}`}
  >
    {children}
  </button>
);

// ✅ Footer Component
const Footer = ({ onBack }: { onBack: () => void }) => (
  <div className="fixed bottom-0 left-0 right-0 bg-[#0f0f0f] border-t border-[#333333] p-4 z-30">
    <div className="max-w-6xl mx-auto flex justify-center">
      <Button
        onClick={onBack}
        className="bg-[#fdd023] text-black hover:bg-[#e4bb18]"
      >
        ⬅ Back
      </Button>
    </div>
  </div>
);

// ✅ Data with Full Content
const categories = [
  {
    id: "individual",
    title: "Protect Individual",
    options: [
      {
        id: "mobile-spy",
        title: "Mobile Spy Detection",
        image: "/animations/mobile-spy.png",
        content: (
          <div className="space-y-6 text-[#f5f5dc]">
            <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#333333]">
              <h3 className="text-lg font-semibold text-[#fdd023] mb-2">Signs Someone Is Spying on Your Phone and How to Stop It</h3>
              <p className="text-sm">
                Your smartphone carries sensitive information — from personal chats and photos to financial data. 
                If someone is spying on your phone, it can compromise your privacy and safety.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-[#fdd023]">1. Check if Someone Is Tracking Your Location</h4>
              <div className="bg-[#1a1a1a] p-4 rounded-lg">
                <p className="font-medium mb-2">How to Check:</p>
                <p>Open Settings → Location → Location Services → Google Location Sharing.</p>
                <p>Review the list of people with whom your location is shared.</p>
                <p>If you find any unknown contacts or devices, remove or stop sharing access immediately.</p>
                <div className="mt-3">
                  <p className="font-medium">Scope:</p>
                  <p className="text-green-400">✔ Detects legitimate location sharing via Google services.</p>
                  <p className="text-red-400">✘ Does not detect hidden GPS tracking apps or spyware installed on your phone.</p>
                </div>
              </div>

              <h4 className="font-semibold text-[#fdd023]">2. Check if Your Messages and Emails Are Being Forwarded</h4>
              <div className="bg-[#1a1a1a] p-4 rounded-lg">
                <p className="font-medium mb-2">How to Check Message Forwarding:</p>
                <p>Open your Messaging app → Tap your profile photo (top right) → Device pairing → Paired devices.</p>
                <p>Remove any unfamiliar paired devices.</p>
                <p className="font-medium mb-2 mt-3">Check Email Access:</p>
                <p>Open Settings → Google Account → Manage your Google Account.</p>
                <p>Search for "All devices" and review the list.</p>
                <p>If you see unknown devices, select and sign out of them.</p>
                <div className="mt-3">
                  <p className="font-medium">Scope:</p>
                  <p className="text-green-400">✔ Helps identify devices legitimately linked to your Google or message accounts.</p>
                  <p className="text-red-400">✘ Does not detect advanced spyware that works outside of account sync mechanisms.</p>
                </div>
              </div>

              <h4 className="font-semibold text-[#fdd023]">3. Check if Someone Is Listening to or Forwarding Your Calls</h4>
              <div className="bg-[#1a1a1a] p-4 rounded-lg">
                <p className="font-medium mb-2">Dial these codes:</p>
                <p><span className="font-mono bg-[#333] px-2 py-1 rounded">*#21#</span> → Shows if calls, SMS, or data are being forwarded.</p>
                <p><span className="font-mono bg-[#333] px-2 py-1 rounded">*#62#</span> → Reveals where calls are forwarded when your number is unreachable.</p>
                <p><span className="font-mono bg-[#333] px-2 py-1 rounded">##002#</span> → Deactivates all call forwarding settings.</p>
                <div className="mt-3">
                  <p className="font-medium">Scope:</p>
                  <p className="text-green-400">✔ Detects SIM/network-level call forwarding.</p>
                  <p className="text-red-400">✘ Does not detect apps secretly recording or transmitting calls.</p>
                </div>
              </div>

              <h4 className="font-semibold text-[#fdd023]">4. Check if Someone Is Using Your Camera or Microphone</h4>
              <div className="bg-[#1a1a1a] p-4 rounded-lg">
                <p className="font-medium mb-2">How to Check:</p>
                <p>Look for a green or orange dot in the status bar — it means your camera or mic is in use.</p>
                <p>Go to Settings → Privacy → Permission Manager → Camera/Microphone.</p>
                <p>Review apps with access and remove permissions for any suspicious ones.</p>
                <p>Change sensitive app permissions to "Ask every time."</p>
                <div className="mt-3">
                  <p className="font-medium">Scope:</p>
                  <p className="text-green-400">✔ Detects apps legitimately using your camera/microphone.</p>
                  <p className="text-red-400">✘ May not detect system-level spyware with hidden access.</p>
                </div>
              </div>

              <h4 className="font-semibold text-[#fdd023]">5. Check for Hidden Device Administrator Apps</h4>
              <div className="bg-[#1a1a1a] p-4 rounded-lg">
                <p className="font-medium mb-2">How to Check:</p>
                <p>Open Settings → Search "Device admin apps" → Tap to view the list.</p>
                <p>Review apps with administrative access — these can lock or control your phone remotely.</p>
                <p>If you find any unfamiliar app, disable its admin rights immediately.</p>
                <div className="mt-3">
                  <p className="font-medium">Scope:</p>
                  <p className="text-green-400">✔ Identifies apps with high-level control over your phone.</p>
                  <p className="text-red-400">✘ Does not show malware with root or custom ROM permissions.</p>
                </div>
              </div>

              <h4 className="font-semibold text-[#fdd023]">6. Check for Unknown Bluetooth or Tracker Devices</h4>
              <div className="bg-[#1a1a1a] p-4 rounded-lg">
                <p className="font-medium mb-2">How to Check:</p>
                <p>Open Settings → Search "Unknown tracker alerts."</p>
                <p>Tap Scan Now to detect nearby Bluetooth trackers (like AirTags or beacons).</p>
                <div className="mt-3">
                  <p className="font-medium">Scope:</p>
                  <p className="text-green-400">✔ Detects physical tracking devices following your phone.</p>
                  <p className="text-red-400">✘ Does not detect tracking via apps or online accounts.</p>
                </div>
              </div>

              <h4 className="font-semibold text-[#fdd023]">7. Check QR Codes and Links for Safety</h4>
              <div className="bg-[#1a1a1a] p-4 rounded-lg">
                <p>Before scanning QR codes or opening links received via messages, emails, or social media, verify their safety using trusted apps like Mobi Armour.</p>
                <p className="font-medium mb-2 mt-3">How to Check:</p>
                <p>Use the app to scan QR codes or paste links.</p>
                <p>If a risk is detected, it will warn you before opening the link in your browser.</p>
              </div>

              <h4 className="font-semibold text-[#fdd023]">8. Use Google Play Protect — Android's Built-in App Security</h4>
              <div className="bg-[#1a1a1a] p-4 rounded-lg">
                <p className="font-medium mb-2">How to Check:</p>
                <p>Open the Google Play Store.</p>
                <p>Tap your profile photo (top-right corner).</p>
                <p>Select Play Protect → Settings (gear icon).</p>
                <p>Ensure the following are ON:</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Scan apps with Play Protect</li>
                  <li>Improve harmful app detection</li>
                </ul>
                <p>Tap Scan to manually check all apps.</p>
                <div className="mt-3">
                  <p className="font-medium">Scope:</p>
                  <p className="text-green-400">✔ Detects harmful apps, spyware, and hidden malware using Google's cloud-based threat analysis.</p>
                  <p className="text-red-400">✘ May not detect advanced or disguised spyware.</p>
                </div>
              </div>

              <h4 className="font-semibold text-[#fdd023]">9. Other Warning Signs to Watch For</h4>
              <div className="bg-[#1a1a1a] p-4 rounded-lg">
                <p className="font-medium mb-2">Be alert for these suspicious behaviors:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Sudden overheating or battery drain</li>
                  <li>Slow internet or excessive background data use</li>
                  <li>Unfamiliar screenshots, files, or apps</li>
                  <li>Green/orange camera/mic dot appearing unexpectedly</li>
                  <li>Unusual sounds during calls or strange notifications</li>
                </ul>
                <p className="mt-3 font-medium">If several of these occur together, your device may be compromised.</p>
              </div>

              <h4 className="font-semibold text-[#fdd023]">What to Do If You Suspect Spyware</h4>
              <div className="bg-[#1a1a1a] p-4 rounded-lg">
                <p className="font-medium mb-2">Run a full scan using trusted antivirus apps such as:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Bitdefender Mobile Security (Android)</li>
                  <li>Norton Mobile Security (Android & iOS)</li>
                  <li>AVG AntiVirus & Security (Android)</li>
                  <li>TotalAV Mobile Security (Android & iOS)</li>
                </ul>
                <ul className="list-disc pl-6 space-y-1 mt-3">
                  <li>Uninstall suspicious apps you don't recognize.</li>
                  <li>Update your device software to patch vulnerabilities.</li>
                  <li>Restart your phone regularly — some temporary malware is cleared on reboot.</li>
                  <li>If issues persist, backup your data and perform a factory reset.</li>
                </ul>
              </div>

              <div className="bg-[#111111] border border-[#fdd023] p-4 rounded-lg">
                <p className="font-semibold text-[#fdd023]">Pro Tip:</p>
                <p className="text-[#f5f5dc]">Run periodic scans using more than one reputable security app. Different tools may detect different threats, improving your chances of uncovering hidden spyware.</p>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: "pc-security",
        title: "PC & Laptop Security",
        image: "/animations/pclaptop.png",
        content: (
          <div className="space-y-6 text-[#f5f5dc]">
            <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#333333]">
              <h3 className="text-lg font-semibold text-[#fdd023] mb-2">How to Check and Secure Your Windows PC or Laptop</h3>
            </div>

            {/* 1. MRT */}
            <div className="bg-[#1a1a1a] p-4 rounded-lg">
              <h4 className="font-semibold text-[#fdd023]">1. MRT (Microsoft Malicious Software Removal Tool)</h4>
              <p className="mt-2">Detects and removes specific widespread malware on Windows PCs.</p>
              <p className="font-medium mt-3">How to Use MRT:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Press Windows + R → type <span className="font-mono bg-[#333] px-2 py-0.5 rounded">mrt</span> → Enter.</li>
                <li>Choose scan type: Quick, Full, or Custom.</li>
                <li>Click Next to start. If malware is detected, MRT removes it automatically.</li>
              </ul>
            </div>

            {/* 2. NETPLWIZ */}
            <div className="bg-[#1a1a1a] p-4 rounded-lg">
              <h4 className="font-semibold text-[#fdd023]">2. NETPLWIZ (User Account Management Tool)</h4>
              <p className="mt-2">Manage user accounts and monitor for unauthorized users.</p>
              <p className="font-medium mt-3">How to Use NETPLWIZ:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Press Windows + R → type <span className="font-mono bg-[#333] px-2 py-0.5 rounded">netplwiz</span> → Enter.</li>
                <li>View all accounts; add, remove, rename, or change account types.</li>
                <li>If you find unknown users, remove them immediately.</li>
              </ul>
              <p className="text-sm mt-2">Review accounts periodically to prevent unauthorized access.</p>
            </div>

            {/* 3. Basic Security Tools working */}
            <div className="bg-[#1a1a1a] p-4 rounded-lg">
              <h4 className="font-semibold text-[#fdd023]">3. Make Sure Basic Security Tools are Working</h4>
              <p className="mt-2">Malware sometimes disables system tools so you can’t find or remove them.</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Press Ctrl + Shift + Esc to open Task Manager. If it won’t open, that’s suspicious.</li>
                <li>Press Windows + R → type <span className="font-mono bg-[#333] px-2 py-0.5 rounded">regedit</span> → Enter. If access is denied or it closes immediately, note it.</li>
                <li>Open Windows Security (Windows Defender) and run a Quick or Full scan.</li>
              </ul>
              <p className="text-sm mt-2">If tools don’t open or are disabled, malware may be blocking them.</p>
            </div>

            {/* 4. Remote Desktop */}
            <div className="bg-[#1a1a1a] p-4 rounded-lg">
              <h4 className="font-semibold text-[#fdd023]">4. Turn Off Remote Desktop (If You Don’t Use It)</h4>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Settings → System → Remote Desktop → Turn OFF Enable Remote Desktop.</li>
                <li>Control Panel → System → Remote Settings → Select “Don’t allow remote connections”.</li>
              </ul>
              <p className="text-sm mt-2">If it was enabled without your knowledge, disable it and change your password.</p>
            </div>

            {/* 5. Unwanted Programs */}
            <div className="bg-[#1a1a1a] p-4 rounded-lg">
              <h4 className="font-semibold text-[#fdd023]">5. Check for Unwanted or Suspicious Programs</h4>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Press Windows + R → type <span className="font-mono bg-[#333] px-2 py-0.5 rounded">appwiz.cpl</span> → Enter.</li>
                <li>Review installed programs; uninstall unknown or suspicious items.</li>
                <li>Chrome: Menu → Extensions → Manage Extensions → Remove unknown extensions.</li>
              </ul>
              <p className="text-sm mt-2">Search app names online before uninstalling; then run a full antivirus scan.</p>
            </div>

            {/* 6. Background Processes */}
            <div className="bg-[#1a1a1a] p-4 rounded-lg">
              <h4 className="font-semibold text-[#fdd023]">6. Watch What’s Running in the Background</h4>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Task Manager → Processes/Details: look for high CPU/memory or no Publisher.</li>
                <li>Right-click → Open file location. If in Temp/AppData, be cautious.</li>
                <li>Scan the file with your antivirus or upload to VirusTotal.com.</li>
              </ul>
            </div>

            {/* 7. Startup Apps */}
            <div className="bg-[#1a1a1a] p-4 rounded-lg">
              <h4 className="font-semibold text-[#fdd023]">7. Check Which Apps Start on Boot</h4>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Task Manager → Startup tab → Disable unknown/unnecessary entries.</li>
              </ul>
            </div>

            {/* 8. Network Connections */}
            <div className="bg-[#1a1a1a] p-4 rounded-lg">
              <h4 className="font-semibold text-[#fdd023]">8. Check Network Connections (Unknown Internet Links)</h4>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Open Command Prompt → run <span className="font-mono bg-[#333] px-2 py-0.5 rounded">netstat -ano | findstr "ESTABLISHED"</span>.</li>
                <li>Note the PID → run <span className="font-mono bg-[#333] px-2 py-0.5 rounded">wmic process where processid="PID" get ExecutablePath</span>.</li>
                <li>Investigate unknown programs/paths and scan them.</li>
              </ul>
              <p className="text-sm mt-2">Many connections are normal (browsers, antivirus, sync). Focus on unknown/odd ones.</p>
            </div>

            {/* 9. Defender Full Scan */}
            <div className="bg-[#1a1a1a] p-4 rounded-lg">
              <h4 className="font-semibold text-[#fdd023]">9. Run a Full System Scan Using Windows Defender</h4>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Open Windows Security → Virus & threat protection → Scan options.</li>
                <li>Select Full scan (or Quick/Custom as needed) → Scan now.</li>
                <li>Follow actions (Clean/Quarantine) if threats are found.</li>
              </ul>
            </div>

            {/* 10. System File Health */}
            <div className="bg-[#1a1a1a] p-4 rounded-lg">
              <h4 className="font-semibold text-[#fdd023]">10. Run a Full System Health Check</h4>
              <p className="mt-2">Checks and repairs Windows system files; fixes corruption (not a virus remover).</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Open Command Prompt as Administrator.</li>
                <li>Run <span className="font-mono bg-[#333] px-2 py-0.5 rounded">sfc /scannow</span>.</li>
                <li>Then run <span className="font-mono bg-[#333] px-2 py-0.5 rounded">DISM /Online /Cleanup-Image /RestoreHealth</span>.</li>
                <li>Restart your PC.</li>
              </ul>
            </div>

            {/* 11. Sysinternals Suite */}
            <div className="bg-[#1a1a1a] p-4 rounded-lg">
              <h4 className="font-semibold text-[#fdd023]">11. Use Microsoft Sysinternals Tools for Deep Checking</h4>
              <p className="mt-2">Free professional tools from Microsoft for advanced inspection.</p>
              <p className="text-sm mt-1">Docs & download: <span className="font-mono">https://learn.microsoft.com/en-us/sysinternals/</span></p>
              <p className="font-medium mt-3">Key tools:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><span className="font-semibold">Autoruns</span>: Disable unknown startups (yellow/no Publisher).</li>
                <li><span className="font-semibold">TCPView</span>: See active connections; investigate unknown processes.</li>
                <li><span className="font-semibold">Process Explorer</span>: Inspect process properties and paths.</li>
                <li><span className="font-semibold">ProcMon (advanced)</span>: Record and filter real-time activity.</li>
              </ul>
              <p className="text-sm mt-2">Do not delete/disable items unless sure. Research first; scan suspicious items immediately.</p>
            </div>
          </div>
        ),
      },
      {
        id: "online-fraud",
        title: "Online Shopping Fraud Recovery",
        image: "/animations/onlinefraud.png",
        content: (
          <div className="space-y-6 text-[#f5f5dc]">
            <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#333333]">
              <h3 className="text-lg font-semibold text-[#fdd023] mb-2">How to Recover Money from Online Shopping Fraud</h3>
              <p className="text-sm">Online shopping is convenient, but fake websites, fraudulent sellers, and delivery scams can cause financial loss. Avoid paying on unverified sites unless redirected to a trusted payment gateway.</p>
            </div>

            <div className="bg-[#1a1a1a] p-4 rounded-lg">
              <h4 className="font-semibold text-[#fdd023]">Common Types of Online Shopping Frauds</h4>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Fake websites/apps imitating popular e-commerce platforms</li>
                <li>Counterfeit products sold under big brand names</li>
                <li>Delivery frauds where products never arrive despite payment</li>
                <li>Phishing links offering fake discounts</li>
                <li>Social media seller scams (Instagram/Facebook)</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-[#fdd023]">Steps to Recover Money</h4>

              <div className="bg-[#1a1a1a] p-4 rounded-lg">
                <p className="font-medium mb-2">Step 1: Collect Evidence</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Save order confirmations, transaction IDs, and bank statements</li>
                  <li>Take screenshots of chats, emails, and seller profiles</li>
                  <li>Keep delivery receipts and all communications</li>
                </ul>
              </div>

              <div className="bg-[#1a1a1a] p-4 rounded-lg">
                <p className="font-medium mb-2">Step 2: Contact the Seller or Platform</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>For Amazon/Flipkart/Myntra: raise a refund/return request via the platform</li>
                  <li>For social media or third-party sellers: contact them in writing (WhatsApp/email)</li>
                </ul>
              </div>

              <div className="bg-[#1a1a1a] p-4 rounded-lg">
                <p className="font-medium mb-2">Step 3: Report to Bank/Payment Gateway</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Inform your bank or card provider immediately</li>
                  <li>Request a chargeback/dispute for UPI/credit/debit payments</li>
                  <li>For wallets (Paytm/PhonePe/GPay): raise a dispute in their support center</li>
                </ul>
              </div>

              <div className="bg-[#1a1a1a] p-4 rounded-lg">
                <p className="font-medium mb-2">Step 4: Call the Cyber Helpline</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Dial the National Cyber Helpline number and report the transaction</li>
                  <li>If money was transferred recently, banks may freeze or reverse it</li>
                </ul>
              </div>

              <div className="bg-[#1a1a1a] p-4 rounded-lg">
                <p className="font-medium mb-2">Step 5: File a Complaint on the Cybercrime Portal</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Visit the cybercrime portal → Report Financial Fraud</li>
                  <li>Provide transaction ID, seller details, and platform used</li>
                  <li>Upload proofs (screenshots, payment confirmations)</li>
                </ul>
              </div>

              <div className="bg-[#1a1a1a] p-4 rounded-lg">
                <p className="font-medium mb-2">Step 6: File a Complaint with Cyber Police</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Draft a written complaint to the local Cyber Cell</li>
                  <li>Include transaction details, seller info, and screenshots</li>
                  <li>Attach ID proof (Aadhar/PAN/Address proof)</li>
                  <li>Request action under IPC 420 and relevant IT Act sections</li>
                </ul>
              </div>

              <div className="bg-[#1a1a1a] p-4 rounded-lg">
                <p className="font-medium mb-2">Step 7: Consumer Court or Legal Remedies</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>File a case in Consumer Court (Consumer Protection Act, 2019)</li>
                  <li>Approach the Banking Ombudsman for unresolved disputes</li>
                  <li>For high-value frauds, consult a cybercrime advocate</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#1a1a1a] p-4 rounded-lg">
              <h4 className="font-semibold text-[#fdd023]">Legal Provisions</h4>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Section 420 IPC – Cheating and dishonestly inducing delivery of property</li>
                <li>Section 406 IPC – Criminal breach of trust</li>
                <li>Sections 66C & 66D IT Act – Identity theft and cheating by impersonation</li>
                <li>Consumer Protection Act, 2019 – E-commerce disputes</li>
              </ul>
            </div>

            <div className="bg-[#1a1a1a] p-4 rounded-lg">
              <h4 className="font-semibold text-[#fdd023]">Red Flags to Watch Out For</h4>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Unbelievable discounts that are too good to be true</li>
                <li>No Cash on Delivery (COD) — advance payment only</li>
                <li>Poor website design, grammar errors, or broken links</li>
                <li>Unverified social media handles</li>
                <li>No customer support or unclear return policies</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        id: "cyber-scam",
        title: "Cyber Scams Money Recovery",
        image: "/animations/cyberscam.png",
        content: (
          <div className="space-y-6 text-[#f5f5dc]">
            <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#333333]">
              <h3 className="text-lg font-semibold text-[#fdd023] mb-2">Recovering Money from Cyber Scams</h3>
              <p className="text-sm">If you’ve lost money in an online scam or cybercrime — such as fake investment sites, phishing messages, or fraudsters pretending to be bank officials — don’t panic. Taking immediate and correct steps can increase your chances of getting your money back and protecting your identity.</p>
            </div>

            {/* Step 1: Immediate Action */}
            <div className="bg-[#1a1a1a] p-4 rounded-lg">
              <h4 className="font-semibold text-[#fdd023]">Step 1: Take Immediate Action</h4>
              <div className="mt-3 space-y-3">
                <div>
                  <p className="font-medium">Report to the Police or Cyber Crime Portal</p>
                  <ul className="list-disc pl-6 space-y-1 mt-1">
                    <li>File a report at <span className="font-mono">cybercrime.gov.in</span> or your local police station.</li>
                    <li>Mention every detail: amount lost, transaction ID, phone numbers, and screenshots.</li>
                    <li>Obtain a crime reference number — needed for bank follow-ups.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium">Contact Your Bank Immediately</p>
                  <ul className="list-disc pl-6 space-y-1 mt-1">
                    <li>Inform both your bank and the recipient bank about the fraud.</li>
                    <li>Banks can sometimes freeze or recall funds if reported early.</li>
                    <li>Request to block your account, card, or UPI ID to prevent further loss.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium">Be Alert for Recovery Scams</p>
                  <ul className="list-disc pl-6 space-y-1 mt-1">
                    <li>Fraudsters may pose as banks, police, or “money recovery agents”.</li>
                    <li>Never share OTPs or personal details, or make further payments to such callers.</li>
                    <li>Always call your bank or official helpline directly using verified numbers.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Four Scenarios */}
            <div className="bg-[#1a1a1a] p-4 rounded-lg">
              <h4 className="font-semibold text-[#fdd023]">Four Common Scenarios of Financial Loss</h4>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Authorised payments (you were tricked into sending money)</li>
                <li>Unauthorised payments (criminal accessed your account)</li>
                <li>Identity theft / impersonation (accounts or actions in your name)</li>
                <li>Card or payment app fraud (Debit/Credit/UPI)</li>
              </ul>
            </div>

            {/* 1) Authorised Payments */}
            <div className="bg-[#1a1a1a] p-4 rounded-lg">
              <h4 className="font-semibold text-[#fdd023]">1) Authorised Payments (You Were Tricked into Sending Money)</h4>
              <p className="mt-2">Cases where you approved the transaction due to deception (fake investments, online jobs, romance scams).</p>
              <p className="font-medium mt-2">What to Do:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Report immediately to your bank’s fraud department — this triggers an investigation.</li>
                <li>The bank should investigate within defined timelines and inform you of the result.</li>
                <li><span className="font-semibold">Possible outcomes:</span> Full refund (bank didn’t protect/warn adequately), partial refund (shared responsibility), or no refund (warnings were adequate but ignored).</li>
              </ul>
              <p className="text-sm mt-2">Tip: Provide all evidence (chats, emails, screenshots). Strong documentation improves reimbursement chances.</p>
            </div>

            {/* 2) Unauthorised Payments */}
            <div className="bg-[#1a1a1a] p-4 rounded-lg">
              <h4 className="font-semibold text-[#fdd023]">2) Unauthorised Payments (Criminal Accessed Your Account)</h4>
              <p className="mt-2">Happens when credentials are stolen via phishing, malware, or remote access apps.</p>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Call your bank immediately to freeze your account.</li>
                <li>Most banks apply “zero-liability” if reported promptly and you weren’t negligent.</li>
                <li>File a police/cybercrime complaint for official investigation.</li>
              </ul>
            </div>

            {/* 3) Identity Theft / Impersonation */}
            <div className="bg-[#1a1a1a] p-4 rounded-lg">
              <h4 className="font-semibold text-[#fdd023]">3) Identity Theft / Impersonation Fraud</h4>
              <p className="mt-2">Fraudsters use your identity to open accounts, take loans, or make transactions in your name.</p>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Inform your bank and credit bureau immediately — request a temporary credit freeze.</li>
                <li>File police and cybercrime complaints with full details.</li>
                <li>Change all passwords for banking, email, and social media; enable MFA.</li>
                <li>Monitor your credit report for unknown accounts (e.g., Experian, CIBIL, Equifax).</li>
              </ul>
            </div>

            {/* 4) Card or Payment App Fraud */}
            <div className="bg-[#1a1a1a] p-4 rounded-lg">
              <h4 className="font-semibold text-[#fdd023]">4) Card or Payment App Fraud (Debit/Credit/UPI)</h4>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Block your card or UPI ID immediately using your bank’s app or helpline.</li>
                <li>Raise a dispute within your banking app or payment app (Report a problem / Dispute transaction).</li>
                <li>Call the bank’s fraud helpline and provide details (SMS alerts, transaction IDs).</li>
                <li>File a police complaint and submit your transaction proof.</li>
              </ul>
              <div className="mt-3">
                <p className="font-medium">If paid via an official payment app (Google Pay, PhonePe, Paytm, BHIM UPI)</p>
                <ul className="list-disc pl-6 space-y-1 mt-1">
                  <li>Open the app → Help/Support → select the transaction → choose Report Fraud.</li>
                  <li>These platforms work with banks/NPCI and can speed up disputes and refunds.</li>
                </ul>
              </div>
            </div>

            {/* Additional Protection Tips */}
            <div className="bg-[#111111] border border-[#fdd023] p-4 rounded-lg">
              <h4 className="font-semibold text-[#fdd023]">Additional Protection Tips</h4>
              <ul className="list-disc pl-6 space-y-1 mt-2 text-[#f5f5dc]">
                <li>Keep all messages, screenshots, and receipts as evidence.</li>
                <li>Update phone OS, banking apps, and antivirus software.</li>
                <li>Use strong, unique passwords and enable MFA.</li>
                <li>Verify any communication claiming to be from your bank or the police.</li>
                <li>Periodically review bank statements and your credit report for unknown activity.</li>
              </ul>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    id: "organization",
    title: "Protect Organization",
    options: [
      {
        id: "brand-impersonation",
        title: "Brand Impersonation",
        image: "/animations/brand.png",
        content: (
          <div className="space-y-6 text-[#f5f5dc]">
            {/* What is Brand Impersonation */}
            <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#333333]">
              <h3 className="text-lg font-semibold text-[#fdd023] mb-2">What is Online Brand Impersonation?</h3>
              <p>Online brand impersonation (also known as brand infringement) happens when someone falsely represents your brand, organisation, or services online.</p>
              <p className="mt-2">It can occur through:</p>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Fake websites or domains pretending to be your brand</li>
                <li>Social media accounts, emails, SMS messages, or phone calls using your name or logo</li>
                <li>Online ads or phishing campaigns that appear to come from your business</li>
              </ul>
              <p className="mt-2">This type of impersonation can damage your reputation and trick customers into revealing sensitive information or making payments to criminals.</p>
            </div>

            {/* Risks */}
            <div className="bg-[#1a1a1a] p-4 rounded-lg">
              <h4 className="font-semibold text-[#fdd023]">2. What Are the Risks?</h4>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Financial loss for your customers or organisation</li>
                <li>Loss of trust and brand credibility</li>
                <li>Data theft via phishing or malware disguised as your brand</li>
                <li>Spread of fake information or false endorsements</li>
              </ul>
              <p className="text-sm mt-2">The more popular your brand, the greater the risk of being exploited online.</p>
            </div>

            {/* What is a Takedown */}
            <div className="bg-[#1a1a1a] p-4 rounded-lg">
              <h4 className="font-semibold text-[#fdd023]">3. What is a Takedown?</h4>
              <p className="mt-2">A takedown means removing fake or malicious online content — such as phishing sites or impersonation pages — by contacting:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>The domain registrar (who issued the website name), or</li>
                <li>The hosting company (where the fake website is hosted)</li>
              </ul>
              <p className="mt-2">They can suspend or delete the malicious website if it violates their terms and conditions. Takedowns are usually done through a notification — no legal process is needed in most cases.</p>
            </div>

            {/* Steps to Take */}
            <div className="bg-[#1a1a1a] p-4 rounded-lg space-y-4">
              <h4 className="font-semibold text-[#fdd023]">4. Steps You Can Take Right Now</h4>

              <div>
                <p className="font-medium">🧩 Step 1: Identify the Fake Website or Domain</p>
                <ul className="list-disc pl-6 space-y-1 mt-1">
                  <li>Use a WHOIS lookup tool to find who registered the domain</li>
                  <li>Note the registrar’s details (e.g., GoDaddy, Namecheap)</li>
                </ul>
              </div>

              <div>
                <p className="font-medium">🧩 Step 2: Find the Registrar’s Abuse Contact</p>
                <ul className="list-disc pl-6 space-y-1 mt-1">
                  <li>Search: Registrar Name + “abuse contact” (e.g., “GoDaddy abuse contact”)</li>
                </ul>
              </div>

              <div>
                <p className="font-medium">🧩 Step 3: Identify the Hosting Provider</p>
                <ul className="list-disc pl-6 space-y-1 mt-1">
                  <li>Use a “website to IP” lookup to get the site’s IP</li>
                  <li>Run an “IP WHOIS” to find the hosting company</li>
                </ul>
              </div>

              <div>
                <p className="font-medium">🧩 Step 4: Contact the Abuse Team</p>
                <p className="text-sm mt-1">Write to the registrar/host’s abuse or support email and include:</p>
                <ul className="list-disc pl-6 space-y-1 mt-1">
                  <li>Screenshots showing the impersonating page or phishing form</li>
                  <li>Full URL and the date/time of capture</li>
                  <li>Copies of phishing emails/messages, including email headers if available</li>
                </ul>
              </div>

              <div>
                <p className="font-medium">🧩 Step 5: Wait for the Takedown</p>
                <ul className="list-disc pl-6 space-y-1 mt-1">
                  <li>The registrar/host will verify your complaint and may suspend/remove the site</li>
                  <li>Timeline varies: a few hours to several days or weeks</li>
                  <li>Some hosts may ignore requests — persistence helps</li>
                </ul>
              </div>
            </div>

            {/* Takedown Provider */}
            <div className="bg-[#1a1a1a] p-4 rounded-lg">
              <h4 className="font-semibold text-[#fdd023]">5. Use a Takedown Provider (Optional)</h4>
              <p className="mt-2">If impersonation is widespread or time-consuming to manage, consider hiring a takedown service provider. They can collect evidence, liaise with registrars/hosts, and remove fraudulent websites and social media accounts on your behalf.</p>
            </div>
          </div>
        ),
      },
    ],
  },
];

export default function SecurityGuide() {
  const [selectedMain, setSelectedMain] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<any>(null);

  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <div className="p-6 lg:p-12 pt-24">
        <h1 className="text-3xl font-bold text-center mb-10 text-[#fdd023]">
          🛡 Cybersecurity Awareness Dashboard
        </h1>

      {/* Step 1: Main Categories */}
      {!selectedMain && (
        <motion.div
          layout
          className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Card
                title={cat.title}
                image={
                  cat.id === "individual"
                    ? "/animations/protect-indi.png"
                    : "/animations/protect-org.png"
                }
                onClick={() => setSelectedMain(cat.id)}
              >
                Explore cybersecurity options for{" "}
                {cat.id === "individual" ? "personal devices" : "organizations"}.
              </Card>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Step 2: Options */}
      {selectedMain && !selectedOption && (
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto pb-20"
        >
          {categories
            .find((c) => c.id === selectedMain)
            ?.options.map((opt) => (
              <motion.div
                key={opt.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <Card
                  title={opt.title}
                  image={opt.image}
                  onClick={() => setSelectedOption(opt)}
                >
                  Click to learn more.
                </Card>
              </motion.div>
            ))}
        </motion.div>
      )}

      {/* Footer - shows only on category view (no option modal) */}
      {selectedMain && !selectedOption && (
        <Footer
          onBack={() => {
            setSelectedMain(null);
            setSelectedOption(null);
          }}
        />
      )}

      {/* Step 3: Popup Modal */}
      <AnimatePresence>
        {selectedOption && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#1a1a1a] rounded-2xl p-6 max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#333]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <h3 className="text-2xl font-bold mb-3 text-[#fdd023]">
                {selectedOption.title}
              </h3>
              {selectedOption.image && (
                <img
                  src={selectedOption.image}
                  alt={selectedOption.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
              )}
              {selectedOption.content}
              <div className="flex justify-end mt-6">
                <Button
                  onClick={() => setSelectedOption(null)}
                  className="bg-[#fdd023] text-black hover:bg-[#e4bb18]"
                >
                  Close
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </div>
  );
}