import { create } from "zustand";

export const useProjectsGetter = create((set) => ({
    projects: [],
    setProjects: (projects) => set({ projects }),
    // Should create 2 functions here, fetch repos (from 'https://api.github.com/users/xushidev/repos' to get all repos)
    // And fetch readme should get the repo.name and pass back the raw text (example: fetchContent underneath)

    fetchContent: async () => {
        const res = await fetch("https://raw.githubusercontent.com/xushidev/xushidev/main/README.md");
        const data = await res.text(); // Get the raw text content
        set({ projects: data });
    },
}));
