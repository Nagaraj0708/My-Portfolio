import React from "react";

export function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

// ── Official High-Resolution Tech Stack Icons ───────────────────

export function AngularIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M125 30L31.9 63.2L46.1 186.3L125 230L203.9 186.3L218.1 63.2L125 30Z" fill="#DD0031" />
      <path d="M125 30V230L203.9 186.3L218.1 63.2L125 30Z" fill="#C3002F" />
      <path d="M125 67.2L74.8 179.6H98.3L108.4 154H141.4L151.5 179.6H175.2L125 67.2ZM134.8 135H115.2L125 111.3L134.8 135Z" fill="#FFFFFF" />
    </svg>
  );
}

export function TypeScriptIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="256" height="256" rx="36" fill="#3178C6" />
      <path d="M140.4 153.6C143.5 167.3 154.5 174.9 169.5 174.9C183.1 174.9 192.4 167.9 192.4 158.4C192.4 147.2 184.9 143.1 169.1 136.2L159.2 131.8C138.8 122.9 127.1 112.9 127.1 92.4C127.1 70.8 144.3 56 170.8 56C195.1 56 210.8 69.4 214.2 90.7H189.5C186.8 79.7 179.6 74.9 170.1 74.9C159.5 74.9 152 80.7 152 89.7C152 99.3 158.5 103.4 174.3 110.3L184.2 114.7C207.2 124.6 217.8 134.6 217.8 155.6C217.8 179.9 198.9 194 169.1 194C140.7 194 124.6 179.6 120.5 153.6H140.4ZM38 77H67.4V191H92.4V77H121.8V57H38V77Z" fill="#FFFFFF" />
    </svg>
  );
}

export function NextjsIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="90" cy="90" r="90" fill="#000000" />
      <path d="M149.5 154.5L78.6 62.5H62.5V117.5H74.5V77.8L139.8 162.2C143.2 159.8 146.4 157.3 149.5 154.5Z" fill="url(#nextG1)" />
      <path d="M117.5 62.5H105.5V117.5H117.5V62.5Z" fill="url(#nextG2)" />
      <defs>
        <linearGradient id="nextG1" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="nextG2" x1="111.5" y1="62.5" x2="111.5" y2="108" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function DotNetIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="256" height="256" rx="36" fill="#512BD4" />
      <circle cx="68" cy="178" r="14" fill="#FFFFFF" />
      <path d="M152 64H116C93.9 64 76 81.9 76 104V152C76 174.1 93.9 192 116 192H152C174.1 192 192 174.1 192 152V104C192 81.9 174.1 64 152 64ZM168 152C168 160.8 160.8 168 152 168H116C107.2 168 100 160.8 100 152V104C100 95.2 107.2 88 116 88H152C160.8 88 168 95.2 168 104V152Z" fill="#FFFFFF" />
      <path d="M128 110L144 146H112L128 110Z" fill="#512BD4" />
    </svg>
  );
}

export function RxjsIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="256" height="256" rx="36" fill="#B7178C" />
      <path d="M184 108C172 82 144 72 128 72C98 72 74 96 74 126C74 156 98 180 128 180C158 180 178 162 182 138H158C154 150 142 160 128 160C110 160 96 146 96 128C96 110 110 96 128 96C140 96 150 102 156 112L184 108Z" fill="#FFFFFF" />
      <circle cx="168" cy="92" r="10" fill="#FF4081" />
    </svg>
  );
}

export function TailwindIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="256" height="256" rx="36" fill="#0F172A" />
      <path d="M68 128C72 112 82 104 98 104C118 104 122 118 132 118C142 118 148 112 152 98C148 114 138 122 122 122C102 122 98 108 88 108C78 108 72 114 68 128ZM104 158C108 142 118 134 134 134C154 134 158 148 168 148C178 148 184 142 188 128C184 144 174 152 158 152C138 152 134 138 124 138C114 138 108 144 104 158Z" fill="#38BDF8" />
    </svg>
  );
}

export function ReactIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="256" height="256" rx="36" fill="#0E131F" />
      <circle cx="128" cy="128" r="22" fill="#00D8FF" />
      <ellipse cx="128" cy="128" rx="84" ry="34" stroke="#00D8FF" strokeWidth="10" transform="rotate(0 128 128)" />
      <ellipse cx="128" cy="128" rx="84" ry="34" stroke="#00D8FF" strokeWidth="10" transform="rotate(60 128 128)" />
      <ellipse cx="128" cy="128" rx="84" ry="34" stroke="#00D8FF" strokeWidth="10" transform="rotate(120 128 128)" />
    </svg>
  );
}
