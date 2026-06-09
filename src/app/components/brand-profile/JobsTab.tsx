/**
 * Brand Profile — Jobs tab
 *
 * Full-width job listings with 16px horizontal safe-area padding.
 * Reuses Lumio's JobCard with hideLogo (no repeated brand logo).
 * Apply state is shared with JobsPage via appliedJobsStore.
 * View Details navigates to JobsPage with the job pre-opened.
 */

import { useNavigate } from "react-router-dom";
import { JobCard, type Job } from "../JobCard";
import { useAppliedJobs } from "@/app/stores/appliedJobsStore";

interface JobsTabProps {
  jobs: Job[];
}

export function JobsTab({ jobs }: JobsTabProps) {
  const navigate = useNavigate();
  const { appliedIds, apply } = useAppliedJobs();

  if (jobs.length === 0) {
    return (
      <div className="px-4 py-16 flex flex-col items-center gap-2">
        <p className="type-h5 text-[#6b5f7a] text-center">No open positions right now.</p>
        <p className="type-body-2 text-[#9d90ad] text-center">Check back later for new opportunities.</p>
      </div>
    );
  }

  return (
    /* 16px horizontal safe-area padding, full-width cards */
    <div className="px-4 py-2">
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
          applied={appliedIds.has(job.id)}
          hideLogo
          onApply={() => apply(job.id)}
          onViewDetails={() =>
            navigate("/jobs", { state: { openJob: job } })
          }
        />
      ))}
    </div>
  );
}
