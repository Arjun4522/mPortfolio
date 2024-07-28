import { z } from "zod";

const projectSchema = z.object({
  repo: z.string(),
  link: z.string(),
  description: z.string(),
});

export type Project = z.infer<typeof projectSchema>;

// export async function getProjects(
//   number: 1 | 2 | 3 | 4 | 5 | 6,
// ): Promise<Project[]> {
//   const res = await fetch("https://gh-pinned.vercel.app/api/user/nexxeln").then(
//     res => res.json(),
//   )

//   const projects = projectSchema.array().parse(res)

//   return projects.slice(0, number)
// }

export async function getProjects(): Promise<Project[]> {
  return [

    {
      repo: "First Light",
      link: "Non-disclosable for ethical reasons",
      description: "First Light is a sophisticated personnel surveillance and intelligence tool designed to track, monitor, and log activities on any Android device. Key features include live screen capturing, media extraction, WhatsApp message logging, and location tracking, among others.",
    },
    {
      repo: "Lazarus.ai",
      link: "Non-disclosable due to company policy",
      description: "Lazarus.ai is an advanced MLSecOps platform designed for seamless integration with any ML model deployment workflow. It meticulously scans for potential bugs and security vulnerabilities at every stage of the CI/CD pipeline. Equipped with an intuitive in-built chat UI, Lazarus.ai enhances the vulnerability management process, ensuring it is both comprehensive and reliable.",
    },
    {
      repo: "Basix-OS (KVM based minimal linux operating system)",
      link: "https://github.com/Arjun4522/Basix-OS",
      description: "Basix is a KVM based minimal linux operating system, built on linux kernel version 5.18.11 and BusyBox version 1.36.1.",
    },
    {
      repo: "Dark Spider",
      link: "https://github.com/Arjun4522/dark-spider",
      description: "Dark-spider is an advanced dark web intelligence tool engineered to navigate and index content on the dark web. It systematically crawls through .onion websites, extracting all hyperlinks from those pages. The crawler operates recursively up to a specified depth, organizing the links in a tree-like structure in JSON format for further analysis.",
    },
    {
      repo: "WireSniff (Simple Network Packet Sniffer)",
      link: "https://github.com/Arjun4522/WireSniff",
      description: "This network packet sniffer is implemented in C using the libpcap library. The program captures network packets traversing a specified network interface, providing a robust foundation for packet data analysis. The output data includes source and destination IP addresses, packet protocol, payload content, and additional relevant information.",
    },
  ];
}
