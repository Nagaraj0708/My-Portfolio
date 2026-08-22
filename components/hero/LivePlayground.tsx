"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Cpu, Check, Copy } from "lucide-react";

interface CodeSnippet {
  id: string;
  tabName: string;
  filename: string;
  lang: string;
  code: string;
  description: string;
}

const snippets: CodeSnippet[] = [
  {
    id: "angular",
    tabName: "Angular UI",
    filename: "clinical-patient.component.ts",
    lang: "typescript",
    description: "Reactive Component with RxJS async pipe & route guards",
    code: `@Component({
  selector: 'app-patient-entry',
  templateUrl: './patient-entry.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientEntryComponent implements OnInit {
  public patient$ = this.clinicalService.activePatient$;
  
  constructor(private clinicalService: ClinicalService) {}
}`,
  },
  {
    id: "rxjs",
    tabName: "RxJS State",
    filename: "patient-store.service.ts",
    lang: "typescript",
    description: "Unidirectional data stream with BehaviorSubject & operators",
    code: `@Injectable({ providedIn: 'root' })
export class PatientStore {
  private _state = new BehaviorSubject<PatientState>(initialState);
  public state$ = this._state.asObservable();

  public updatePatient(data: PatientDto): Observable<boolean> {
    return this.http.post<boolean>('/api/clinical/update', data)
      .pipe(tap(() => this.reloadState()));
  }
}`,
  },
  {
    id: "dotnet",
    tabName: ".NET Web API",
    filename: "ClinicalController.cs",
    lang: "csharp",
    description: "ASP.NET Core REST API Controller with Role Authorization",
    code: `[Authorize(Roles = "ClinicalAdmin,Doctor")]
[ApiController]
[Route("api/[controller]")]
export class ClinicalController : ControllerBase {
    [HttpPost("update")]
    public async Task<IActionResult> UpdatePatient([FromBody] PatientDto dto) {
        var result = await _mediator.Send(new UpdatePatientCommand(dto));
        return Ok(result);
    }
}`,
  },
  {
    id: "sql",
    tabName: "EF Core / SQL",
    filename: "ClinicalDbContext.cs",
    lang: "csharp",
    description: "Entity Framework Core model mapping & optimized database queries",
    code: `public async Task<PatientRecord> GetFullEMRAsync(Guid patientId) {
    return await _context.Patients
        .Include(p => p.MedicalHistory)
        .Include(p => p.Appointments)
        .AsNoTracking()
        .FirstOrDefaultAsync(p => p.Id == patientId);
}`,
  },
];

export function LivePlayground() {
  const [activeId, setActiveId] = useState<string>("angular");
  const [copied, setCopied] = useState(false);

  const activeSnippet = snippets.find((s) => s.id === activeId) || snippets[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs text-slate-300">
      {/* Chrome Bar */}
      <div className="bg-slate-950/80 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
        </div>

        {/* Tab Switcher Pills */}
        <div className="flex items-center space-x-1 bg-slate-900/90 p-1 rounded-lg border border-slate-800">
          {snippets.map((snip) => (
            <button
              key={snip.id}
              onClick={() => setActiveId(snip.id)}
              className={`px-3 py-1 rounded-md text-[11px] font-semibold transition-all ${
                activeId === snip.id
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
              }`}
            >
              {snip.tabName}
            </button>
          ))}
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="flex items-center space-x-1.5 text-slate-400 hover:text-white transition-colors p-1.5 rounded-md hover:bg-slate-800"
          title="Copy Code"
        >
          {copied ? (
            <Check className="w-3.5 h-3.5 text-emerald-400" />
          ) : (
            <Copy className="w-3.5 h-3.5" />
          )}
        </button>
      </div>

      {/* File Header */}
      <div className="px-5 py-2.5 bg-slate-900/50 border-b border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
        <div className="flex items-center space-x-2">
          <Code2 className="w-3.5 h-3.5 text-blue-400" />
          <span className="text-slate-200 font-semibold">{activeSnippet.filename}</span>
        </div>
        <div className="flex items-center space-x-2 text-slate-500">
          <Cpu className="w-3 h-3 text-emerald-400" />
          <span>{activeSnippet.description}</span>
        </div>
      </div>

      {/* Code Display Area */}
      <div className="p-5 overflow-x-auto min-h-48 leading-relaxed font-mono">
        <AnimatePresence mode="wait">
          <motion.pre
            key={activeSnippet.id}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="text-slate-300 text-[11px] md:text-xs"
          >
            <code>{activeSnippet.code}</code>
          </motion.pre>
        </AnimatePresence>
      </div>
    </div>
  );
}
