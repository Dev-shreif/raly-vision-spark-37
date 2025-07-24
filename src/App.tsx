import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ITSolutions from "./pages/ITSolutions";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import ProgramsActivities from "./pages/programs/Activities";
import ProgramsRecentEvents from "./pages/programs/RecentEvents";
import Contact from "./pages/Contact";
import Consultations from "./pages/Consultations";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import FAQ from "./pages/FAQ";
import OracleImplementation from "./pages/specializations/OracleImplementation";
import OracleCloudManagedServices from "./pages/specializations/OracleCloudManagedServices";
import OracleIntegrationCloud from "./pages/specializations/OracleIntegrationCloud";
import OracleCxCloud from "./pages/specializations/OracleCxCloud";
import OracleCloudInfrastructure from "./pages/specializations/OracleCloudInfrastructure";
import SolutionDevelopment from "./pages/specializations/SolutionDevelopment";
import SystemIntegration from "./pages/specializations/SystemIntegration";
import ITInfrastructureSupport from "./pages/specializations/ITInfrastructureSupport";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/solutions" element={<ITSolutions />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/:courseId" element={<CourseDetail />} />
              <Route path="/programs/activities" element={<ProgramsActivities />} />
              <Route path="/programs/recent-events" element={<ProgramsRecentEvents />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/consultations" element={<Consultations />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/consultations/oracle-implementation" element={<OracleImplementation />} />
              <Route path="/consultations/oracle-cloud-managed-services" element={<OracleCloudManagedServices />} />
              <Route path="/consultations/oracle-integration-cloud" element={<OracleIntegrationCloud />} />
              <Route path="/consultations/oracle-cx-cloud" element={<OracleCxCloud />} />
              <Route path="/consultations/oracle-cloud-infrastructure" element={<OracleCloudInfrastructure />} />
              <Route path="/consultations/solution-development" element={<SolutionDevelopment />} />
              <Route path="/consultations/system-integration" element={<SystemIntegration />} />
              <Route path="/consultations/it-infrastructure-support" element={<ITInfrastructureSupport />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
