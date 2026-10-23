"use client";

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "Muhammad Awais Zahid",
    email: "awaiszahid37643@gmail.com",
    message: "Hi, I saw your portfolio and would like to discuss a project.",
  });

  const [imageError, setImageError] = useState(false);

  const skills = [
    "MS Excel",
    "Communication",
    "ARCGIS",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Adobe Illustrate",
    "Geology",
    "Geological Mapping",
    "AI Learning",
    "LeapFrog GEO",
    "Rocks Identification",
    "Field work and Sampling",
  ];

  const projects = [
    {
      title: "Rock Identification",
      category: "Geology",
      icon: "🌍",
      description:
        "A geology project focused on the identification and understanding of different rock types and their characteristics.",
      tags: ["Geology", "Study Of Earth and It's Structures, Rock Identification,"],
      link: "#",
    },
    {
      title: "Personal Portfolio",
      category: "Web Development",
      icon: "💻",
      description:
        "A responsive personal portfolio showcasing my academic background, skills, projects, and professional interests.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: "#",
    },
    {
      title: "Geological Mapping",
      category: "Earth Sciences",
      icon: "🌍",
      description:
        "An academic learning project exploring geological maps, rock distributions, and spatial geological information.",
      tags: ["Geology", "Mapping", "GIS"],
      link: "#",
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:awaiszahid37643@gmail.com?subject=${subject}&body=${body}`;
  };

  const profileImage = "/project.jpeg";

  return (
    <main className="min-h-screen scroll-smooth bg-[#07111f] text-slate-100 selection:bg-blue-500/30 selection:text-white">
      {/* Navigation */}  
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/90 shadow-lg shadow-black/10 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a
            href="#home"
            className="text-xl font-extrabold tracking-tight sm:text-2xl"
          >
            <span className="text-blue-400">Awais</span>
            <span className="text-white">.</span>
          </a>

          <div className="hidden items-center gap-7 text-sm font-medium text-slate-300 md:flex">
            <a href="#home" className="transition hover:text-blue-400">
              Home
            </a>
            <a href="#about" className="transition hover:text-blue-400">
              About
            </a>
            <a href="#skills" className="transition hover:text-blue-400">
              Skills
            </a>
            <a href="#projects" className="transition hover:text-blue-400">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-blue-400">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/25 sm:px-5"
          >
            Let&apos;s Connect
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative isolate overflow-hidden scroll-mt-24"
      >
        <div className="pointer-events-none absolute -left-32 top-10 -z-10 h-80 w-80 rounded-full bg-blue-600/20 blur-[110px]" />
        <div className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:py-32">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
              Geology Student · Aspiring Developer
            </div>

            <p className="mb-3 text-lg font-medium text-slate-400">
              Hello, I&apos;m
            </p>

            <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-7xl">
              Muhammad
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Awais Zahid
              </span>
            </h1>

            <h2 className="mt-6 text-xl font-semibold text-slate-200 sm:text-2xl">
              Exploring Earth. Building the Digital Future.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              I&apos;m a BS Geology student at the University of Sargodha,
              developing my skills in web development, artificial
              intelligence, and geological sciences. I&apos;m passionate
              about learning, creating, and connecting technology with Earth
              science.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-xl bg-blue-500 px-7 py-3.5 font-bold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-400"
              >
                Explore My Work →
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 font-bold text-white transition duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-500/10"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-400">
              <span className="rounded-lg border border-white/10 px-3 py-2">
                🎓 University of Sargodha
              </span>
              <span className="rounded-lg border border-white/10 px-3 py-2">
                🌐 Web Development
              </span>
              <span className="rounded-lg border border-white/10 px-3 py-2">
                🧠 AI Enthusiast
              </span>
            </div>
          </div>

          {/* Profile image: place your photo at public/profile.jpeg*/}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-500/30 via-cyan-400/10 to-indigo-500/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#10243e] via-[#0b1930] to-[#07111f] p-4 shadow-2xl shadow-blue-950/40">
              <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[1.5rem] border border-blue-300/10 bg-gradient-to-br from-blue-500/15 via-[#10243e] to-cyan-400/10">
                {!imageError ? (
                  <img
                    src={profileImage}
                    alt="Muhammad Awais Zahid - Profile Photo"
                    onError={() => setImageError(true)}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center px-6 text-center">
                    <div className="mb-5 flex h-36 w-36 items-center justify-center rounded-full border border-blue-300/30 bg-blue-400/10 text-7xl shadow-2xl shadow-blue-500/20">
                      👨‍🎓
                    </div>
                    <p className="text-2xl font-extrabold text-white">
                      Muhammad Awais Zahid
                    </p>
                    <p className="mt-2 text-sm text-blue-300">
                      Geology Student & Developer
                    </p>
                    <p className="mt-5 max-w-xs text-sm leading-6 text-slate-400">
                      Add your own profile photo as{"project.jpeg"}
                      <code className="text-cyan-300">public/project.jpeg</code>{"project.jpeg "}
                      to introduce yourself with a personal image.
                    </p>
                  </div>
                )}

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#07111f] via-[#07111f]/70 to-transparent p-6 pt-20">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
                    My Journey
                  </p>
                  <p className="mt-2 text-lg font-bold text-white">
                    Science × Technology
                  </p>
                  <p className="mt-1 text-sm text-slate-300">
                    Learning today, creating tomorrow.
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/5 bg-white/[0.04] p-4">
                  <p className="text-2xl font-black text-blue-400">01</p>
                  <p className="mt-1 text-xs text-slate-400">
                    Geological Sciences
                  </p>
                </div>
                <div className="rounded-xl border border-white/5 bg-white/[0.04] p-4">
                  <p className="text-2xl font-black text-cyan-300">02</p>
                  <p className="mt-1 text-xs text-slate-400">
                    Digital Innovation
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -right-3 top-10 hidden rounded-2xl border border-white/10 bg-[#101f33]/95 p-4 shadow-xl sm:block sm:-right-8">
              <span className="text-2xl">🌍</span>
              <p className="mt-1 text-xs font-bold text-white">
                Earth Science
              </p>
            </div>

            <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-white/10 bg-[#101f33]/95 p-4 shadow-xl sm:block sm:-left-8">
              <span className="text-2xl">💻</span>
              <p className="mt-1 text-xs font-bold text-white">
                Web Development
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="scroll-mt-24 border-y border-white/5 bg-[#0a1626] py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
              Get to Know Me
            </p>
            <h2 className="text-3xl font-black sm:text-5xl">
              About <span className="text-blue-400">Me</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
              A curious mind with an interest in Earth science and modern
              technology.
            </p>
          </div>

          <div className="grid items-stretch gap-8 lg:grid-cols-5">
            <div className="flex flex-col justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-transparent p-7 sm:p-10 lg:col-span-3">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 text-3xl">
                🎓
              </div>
              <h3 className="text-2xl font-extrabold text-white">
                Science Meets Technology
              </h3>
              <p className="mt-5 leading-8 text-slate-400">
                I am pursuing a Bachelor&apos;s degree in Geology at the
                University of Sargodha. My academic interests include rocks,
                minerals, geological mapping, and understanding the processes
                that shape our planet.
              </p>
              <p className="mt-4 leading-8 text-slate-400">
                Alongside my studies, I am learning web development and AI,
                exploring how digital tools can support research, problem
                solving, and professional growth. My goal is to keep improving
                my technical knowledge and build useful, meaningful projects.
              </p>
              <a
                href="https://www.linkedin.com/in/muhammad-awais-291b44404/"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex w-fit items-center gap-2 font-semibold text-blue-400 transition hover:text-cyan-300"
              >
                Connect on LinkedIn <span>↗</span>
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
              {[
                {
                  icon: "🌍",
                  title: "Earth Science",
                  desc: "Exploring rocks, minerals, and geological processes.",
                },
                {
                  icon: "💻",
                  title: "Web Development",
                  desc: "Learning to build responsive and modern websites.",
                },
                {
                  icon: "🤖",
                  title: "Artificial Intelligence",
                  desc: "Discovering AI tools and practical applications.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-[#0d1b2d] p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40"
                >
                  <div className="mb-3 text-2xl">{item.icon}</div>
                  <h3 className="font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="scroll-mt-24 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-12">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
              What I Bring
            </p>
            <h2 className="text-3xl font-black sm:text-5xl">
              My <span className="text-blue-400">Skills</span>
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-slate-400">
              Skills I am developing through academic learning, practice, and
              personal projects.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={skill}
                className="group rounded-xl border border-white/10 bg-[#0c1a2b] px-5 py-3 text-sm font-semibold text-slate-300 shadow-lg shadow-black/5 transition duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-blue-300 sm:text-base"
              >
                <span className="mr-2 text-blue-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="scroll-mt-24 border-y border-white/5 bg-[#0a1626] py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
                My Work
              </p>
              <h2 className="text-3xl font-black sm:text-5xl">
                Featured <span className="text-blue-400">Projects</span>
              </h2>
            </div>
            <p className="max-w-md leading-7 text-slate-400">
              A selection of my academic interests and developing technical
              skills.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0d1b2d] transition duration-300 hover:-translate-y-2 hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-950/30"
              >
                <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-blue-500/20 via-[#10243e] to-cyan-500/10">
                  <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full border border-blue-300/10 transition duration-500 group-hover:scale-125" />
                  <div className="absolute -bottom-16 -left-8 h-44 w-44 rounded-full border border-cyan-300/10 transition duration-500 group-hover:scale-125" />
                  <span className="relative text-7xl transition duration-300 group-hover:scale-110">
                    {project.icon}
                  </span>
                  <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-[#07111f]/70 px-3 py-1 text-xs font-semibold text-blue-300">
                    Project 0{index + 1}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
                    {project.category}
                  </p>
                  <h3 className="mt-3 text-xl font-extrabold text-white transition group-hover:text-blue-300">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-white/5 px-3 py-1.5 text-xs text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-white/10 pt-5">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 transition hover:gap-3 hover:text-cyan-300"
                    >
                      Discuss Project <span>→</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-slate-500">
            These cards represent my learning and project interests. Add
            project links and completed work as they become available.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
                Get In Touch
              </p>
              <h2 className="text-3xl font-black leading-tight sm:text-5xl">
                Let&apos;s Build
                <br />
                Something <span className="text-blue-400">Meaningful.</span>
              </h2>
              <p className="mt-6 max-w-lg leading-8 text-slate-400">
                Have a question, a project idea, or an opportunity to learn
                and collaborate? Feel free to contact me. I would be happy to
                connect with fellow students, professionals, and technology
                enthusiasts.
              </p>

              <div className="mt-8 space-y-5">
                <a
                  href="mailto:awaiszahid37643@gmail.com"
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#10243e] text-xl transition group-hover:border-blue-400/50">
                    ✉️
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Email Me</p>
                    <p className="mt-1 break-all font-semibold text-slate-200 transition group-hover:text-blue-400">
                      awaiszahid37643@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/muhammad-awais-291b44404/"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#10243e] text-xl transition group-hover:border-blue-400/50">
                    in
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">LinkedIn</p>
                    <p className="mt-1 font-semibold text-slate-200 transition group-hover:text-blue-400">
                      Let&apos;s connect professionally
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/awaiszahid37643-cell"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#10243e] text-xl transition group-hover:border-blue-400/50">
                    &lt;/&gt;
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">GitHub</p>
                    <p className="mt-1 font-semibold text-slate-200 transition group-hover:text-blue-400">
                      Explore my code
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-white/10 bg-[#0c1a2b] p-6 shadow-2xl shadow-black/20 sm:p-9"
            >
              <h3 className="text-2xl font-extrabold text-white">
                Send a Message
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Complete the form below to prepare an email to me.
              </p>

              <div className="mt-7 space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-slate-300"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-white/10 bg-[#07111f] px-4 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-slate-300"
                  >
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/10 bg-[#07111f] px-4 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-slate-300"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell me about your idea..."
                    className="w-full resize-y rounded-xl border border-white/10 bg-[#07111f] px-4 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/10"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-4 font-bold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-400 hover:shadow-blue-500/30"
                >
                  Prepare Email <span>↗</span>
                </button>

                <p className="text-center text-xs leading-5 text-slate-500">
                  This form opens your default email application. It does not
                  send or store messages directly on this website.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#050c16]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-8 text-center sm:px-8 md:flex-row md:text-left">
          <a
            href="#home"
            className="text-xl font-extrabold tracking-tight"
          >
            <span className="text-blue-400">Awais</span>.
          </a>

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Muhammad Awais Zahid. All rights
            reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/in/muhammad-awais-291b44404/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-sm font-semibold text-slate-400 transition hover:text-blue-400"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/awaiszahid37643-cell"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-sm font-semibold text-slate-400 transition hover:text-blue-400"
            >
              GitHub ↗
            </a>
            <a
              href="#home"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition hover:border-blue-400/50 hover:text-blue-400"
              aria-label="Back to top"
            >
              ↑
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}