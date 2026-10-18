import Link from "next/link";
import { ArrowLeft, ArrowDownToLine, CheckCircle2, FileSpreadsheet, FileText } from "lucide-react";

const base = "/api/download/accountant-ready";
const files = [
  {name:"Getting Started & Records Checklist",file:"01_Start_Here_and_Checklist.docx",kind:"Word"},
  {name:"Accountant Handover Cover Sheet",file:"02_Accountant_Handover_Cover_Sheet.docx",kind:"Word"},
  {name:"Accountant-Ready Figures Workbook",file:"04_Accountant_Ready_Figures_Workbook.xlsx",kind:"Excel"},
  {name:"Product Information",file:"03_Product_Descriptions.docx",kind:"Word"},
];

export const metadata = {
 title: "Help Your Accountant | Free Accountant-Ready Starter Pack",
 description: "Organise business income, expenses, missing receipts and questions before meeting your Australian accountant. Download editable Word and Excel files at no cost."
};

export default function HelpYourAccountantPage() {
 return <main className="min-h-screen bg-slate-50">
  <section className="bg-slate-950 text-white">
   <div className="max-w-5xl mx-auto px-5 py-16">
    <Link href="/templates" className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white"><ArrowLeft size={16}/> All templates</Link>
    <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300 mt-8">Free Australian small-business collection</p>
    <h1 className="text-4xl md:text-5xl font-bold mt-3 max-w-3xl">Help Your Accountant — Get Your Figures Ready First</h1>
    <p className="text-lg text-slate-300 mt-5 max-w-3xl">Spend less time sorting paperwork and more time getting useful advice. Gather the records your accountant commonly asks for, flag missing receipts and prepare a clear handover before your appointment.</p>
    <a href={base} className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 text-slate-950 font-bold px-6 py-3 mt-8 hover:bg-emerald-400"><ArrowDownToLine size={18}/> Download complete starter pack (ZIP)</a>
    <p className="text-xs text-slate-400 mt-3">Free download · Editable Word and Excel files · No account or payment required</p>
   </div>
  </section>
  <section className="max-w-5xl mx-auto px-5 py-12 space-y-10">
   <div>
    <h2 className="text-2xl font-bold">What you get</h2>
    <p className="text-slate-600 mt-2 max-w-3xl">The pack helps Australian small-business owners gather known figures and source documents before meeting an accountant or bookkeeper. It does not calculate tax, determine GST treatment or replace professional advice.</p>
    <div className="grid md:grid-cols-2 gap-4 mt-6">
     {files.map(f=><div key={f.file} className="bg-white border border-slate-200 rounded-xl p-5 flex items-start gap-3">
      <span className="text-emerald-700 mt-1">{f.kind==="Excel"?<FileSpreadsheet/>:<FileText/>}</span>
      <div className="flex-1"><h3 className="font-semibold">{f.name}</h3><p className="text-xs text-slate-500 mt-1">Editable {f.kind} document</p>
       <a href={base+"?file="+encodeURIComponent(f.file)} className="text-sm text-emerald-700 underline mt-3 inline-block">Download individually</a>
      </div>
     </div>)}
    </div>
   </div>
   <div className="bg-white border border-slate-200 p-6 rounded-xl">
    <h2 className="text-xl font-bold">What's inside the figures workbook?</h2>
    <ul className="grid md:grid-cols-2 gap-3 mt-4">
     {["Income","Expenses","Transactions you can't identify","Missing receipts","Questions for your accountant","Summary figures","Getting started instructions"].map(x=><li key={x} className="flex items-center gap-2 text-slate-700"><CheckCircle2 className="text-emerald-600 shrink-0" size={18}/>{x}</li>)}
    </ul>
   </div>
   <div className="bg-white border border-slate-200 p-6 rounded-xl">
    <h2 className="text-xl font-bold">How to use the pack</h2>
    <ol className="list-decimal pl-5 mt-4 space-y-3 text-slate-700">
     <li>Download the ZIP and open the Word checklist and Excel workbook.</li>
     <li>Record known income and expenses. Keep invoices, statements and receipts as evidence.</li>
     <li>List unclear transactions and missing documents rather than guessing.</li>
     <li>Complete the cover sheet, then share the records through your accountant's secure method.</li>
    </ol>
   </div>
   <p className="text-sm text-slate-600 border-l-4 border-amber-400 pl-4">Better-prepared paperwork may reduce avoidable follow-up work, but lower accounting fees cannot be guaranteed. These materials are educational and administrative only. They do not determine deductibility, GST, tax liability or filing obligations. Consult a registered professional where needed.</p>
   <Link href="/templates" className="inline-block text-emerald-700 underline">Explore other accounting templates</Link>
  </section>
 </main>;
}
