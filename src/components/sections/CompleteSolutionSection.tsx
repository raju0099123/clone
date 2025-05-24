
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const solutionColumns = [
  {
    title: "Intake (Agent)",
    headerBgClass: "bg-orange-100",
    headerTextClass: "text-orange-700",
    contentBgClass: "bg-white",
    items: [
      "Agent Bots (support, training)",
      "Agent portal",
      "Customer Communication",
      "Customer Mgmt.",
      "Document Intake Review (Accord & Other App formats)",
    ],
    itemTextColorClass: "text-gray-700",
  },
  {
    title: "Lead to Bind (MGA/Carrier)",
    headerBgClass: "bg-orange-100",
    headerTextClass: "text-orange-700",
    contentBgClass: "bg-white",
    items: [
      "Underwriting Bots (Intake, Appetite, Analyze, Approve)",
      "Agent Communication (email, In app, tickets)",
      "Agent Mgmt.",
      "Risk Module (Risk-Mapping, 3pAPIs)",
      "Product Builder",
      "Integration Hub",
    ],
    itemTextColorClass: "text-gray-700",
  },
  {
    title: "Back Office (MGA/Carrier)",
    headerBgClass: "bg-slate-800",
    headerTextClass: "text-slate-100",
    contentBgClass: "bg-slate-700",
    items: [
      "Policy Mgmt.",
      "Claims Mgmt.",
      "Accounting & Billing",
      "CRM (ZOHO)",
      "3P APIs (CoreLogic, Verisk)",
    ],
    itemTextColorClass: "text-slate-300",
  },
];

export default function CompleteSolutionSection({ id }: { id?: string }) {
  return (
    <SectionWrapper id={id} hasBackground className="pt-4">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          <span className="text-primary">Nativeorange</span> Complete Solution
        </h2>
        <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
          Bots for every stage that integrate with your current systems
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {solutionColumns.map((column) => (
          <Card 
            key={column.title} 
            className={`shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col ${column.contentBgClass}`}
          >
            <CardHeader className={`rounded-t-lg ${column.headerBgClass}`}>
              <CardTitle className={`text-xl font-semibold ${column.headerTextClass}`}>
                {column.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 flex-grow">
              <ul className="space-y-3">
                {column.items.map((item) => (
                  <li key={item} className={`text-sm ${column.itemTextColorClass}`}>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
