'use client';

import React, { useEffect } from 'react';
import { SuggestionCard } from './SuggestionCard';
import { Icon } from './Icons';

export function Home() {
  // Animation trigger effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const elements = document.querySelectorAll('.section-card, .grid-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Recommendations */}
      <section className="card section-card relative">
        <div className="wooden-rings-1"></div>
        <div className="flex items-center gap-3 mb-4 relative z-10">
          <div className="p-2 rounded-xl bg-gradient-to-r from-nenrin-sprout to-nenrin-forest-light">
            <Icon.Spark className="text-white animate-sparkle" width="20" height="20"/>
          </div>
          <div>
            <h2 className="font-nenrin-heading text-[24px] font-bold tracking-wide text-nenrin-ink">
              Cultivate Your Day
            </h2>
            <p className="font-nenrin-body text-sm text-nenrin-text-light mt-1">Gentle suggestions to nurture your daily rhythm</p>
          </div>
        </div>
        <div className="section-divider my-4 relative z-10"/>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
          <SuggestionCard title="Greet the Sun" phrase="summarize my tasks every day at 6am" icon={<Icon.Check/>} />
          <SuggestionCard title="Root a New Habit" phrase="run every Sunday at 7am" icon={<Icon.Timer/>} />
          <SuggestionCard title="A Gentle Nudge" phrase="remind me to call mom at 6pm today" icon={<Icon.Bell/>} />
          <SuggestionCard title="Find Your Clearing" phrase="don't reply to my message for an hour" icon={<Icon.Bell/>} />
          <SuggestionCard title="Jot Down a Thought" phrase="Today I learned that elephants have incredible memories." icon={<Icon.Check/>} />
          <SuggestionCard title="Personalize Your Assistant" phrase="From now on, always sign off with my name, [Your Name]." icon={<Icon.Check/>} />
        </div>
      </section>

      {/* How to talk to Nenrin */}
      <section className="mt-6 card section-card relative">
        <div className="wooden-rings-2"></div>
        <div className="flex items-center gap-3 mb-4 relative z-10">
          <div className="p-2 rounded-xl bg-gradient-to-r from-nenrin-forest to-nenrin-gold">
            <Icon.Spark className="text-white animate-sparkle" width="20" height="20" style={{ animationDelay: "1s" }}/>
          </div>
          <div>
            <h2 className="font-nenrin-heading text-[22px] font-bold tracking-wide text-nenrin-ink">
              Planting Seeds of Action
            </h2>
            <p className="font-nenrin-body text-sm text-nenrin-text-light mt-1">Natural ways to communicate your intentions</p>
          </div>
        </div>
        <div className="section-divider my-4 relative z-10"/>
        <ul className="font-nenrin-body text-[15px] grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 relative z-10">
          <li className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-nenrin-mist to-transparent border border-nenrin-forest border-opacity-15 transition-all duration-300 hover:shadow-md">
            <span className="chip">New Task</span> 
            <span className="flex-1 text-nenrin-ink">&ldquo;call Dinda tomorrow at 9am&rdquo;</span>
          </li>
          <li className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-nenrin-mist to-transparent border border-nenrin-forest border-opacity-15 transition-all duration-300 hover:shadow-md">
            <span className="chip">Reminder</span> 
            <span className="flex-1 text-nenrin-ink">&ldquo;remind me Friday 6pm to pay bills&rdquo;</span>
          </li>
          <li className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-nenrin-mist to-transparent border border-nenrin-forest border-opacity-15 transition-all duration-300 hover:shadow-md">
            <span className="chip">Reschedule</span> 
            <span className="flex-1 text-nenrin-ink">&ldquo;move design review to next Tuesday 10am&rdquo;</span>
          </li>
          <li className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-nenrin-mist to-transparent border border-nenrin-forest border-opacity-15 transition-all duration-300 hover:shadow-md">
            <span className="chip">Ask for Advice</span> 
            <span className="flex-1 text-nenrin-ink">&ldquo;what should I do first today?&rdquo;</span>
          </li>
        </ul>
      </section>

      {/* Glossary */}
      <section className="mt-6 card section-card relative">
        <div className="wooden-rings-3"></div>
        <div className="flex items-center gap-3 mb-4 relative z-10">
          <div className="p-2 rounded-xl bg-gradient-to-r from-nenrin-sage to-nenrin-sprout">
            <Icon.Spark className="text-white animate-sparkle" width="20" height="20" style={{ animationDelay: "2s" }}/>
          </div>
          <div>
            <h2 className="font-nenrin-heading text-[20px] font-semibold tracking-wider text-nenrin-ink">
              Nenrin Glossary
            </h2>
            <p className="font-nenrin-body text-sm text-nenrin-text-light mt-1">Understanding your digital companion&rsquo;s capabilities</p>
          </div>
        </div>
        <div className="section-divider my-4 relative z-10"/>
        <div className="font-nenrin-body text-[14px] grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 relative z-10">
          <div className="p-4 rounded-xl bg-gradient-to-br from-nenrin-mist to-transparent border border-nenrin-forest border-opacity-8 transition-all duration-300 hover:shadow-lg hover:border-opacity-18">
            <h3 className="font-bold text-base font-nenrin-heading text-nenrin-forest mb-2 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-nenrin-forest"/>
              Memory
            </h3>
            <p className="text-nenrin-text-light leading-relaxed">Personal details Nenrin should remember about you to personalize replies automatically. <br/><i className="text-nenrin-forest font-medium">Try: &ldquo;remember my work hours are 9-5&rdquo;</i></p>
          </div>
           <div className="p-4 rounded-xl bg-gradient-to-br from-nenrin-mist to-transparent border border-nenrin-forest border-opacity-8 transition-all duration-300 hover:shadow-lg hover:border-opacity-18">
            <h3 className="font-bold text-base font-nenrin-heading text-nenrin-forest mb-2 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-nenrin-sprout"/>
              Journal
            </h3>
            <p className="text-nenrin-text-light leading-relaxed">General notes not about you&mdash;like meeting summaries or ideas&mdash;that are easy to search later.<br/><i className="text-nenrin-forest font-medium">Try: &ldquo;journal: design review notes&hellip;&rdquo;</i></p>
          </div>
           <div className="p-4 rounded-xl bg-gradient-to-br from-nenrin-mist to-transparent border border-nenrin-forest border-opacity-8 transition-all duration-300 hover:shadow-lg hover:border-opacity-18">
            <h3 className="font-bold text-base font-nenrin-heading text-nenrin-forest mb-2 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-nenrin-gold"/>
              Tasks
            </h3>
            <p className="text-nenrin-text-light leading-relaxed">Your to-dos. You can add, edit, complete, or break them into subtasks.<br/><i className="text-nenrin-forest font-medium">Try: &ldquo;add task: call Dinda tomorrow 9am&rdquo;</i></p>
          </div>
           <div className="p-4 rounded-xl bg-gradient-to-br from-nenrin-mist to-transparent border border-nenrin-forest border-opacity-8 transition-all duration-300 hover:shadow-lg hover:border-opacity-18">
            <h3 className="font-bold text-base font-nenrin-heading text-nenrin-forest mb-2 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-nenrin-sage"/>
              Reminders
            </h3>
            <p className="text-nenrin-text-light leading-relaxed">Gentle nudges at a specific date and time. You can reschedule or remove them anytime.<br/><i className="text-nenrin-forest font-medium">Try: &ldquo;remind me today 6pm to send invoice&rdquo;</i></p>
          </div>
           <div className="p-4 rounded-xl bg-gradient-to-br from-nenrin-mist to-transparent border border-nenrin-forest border-opacity-8 transition-all duration-300 hover:shadow-lg hover:border-opacity-18">
            <h3 className="font-bold text-base font-nenrin-heading text-nenrin-forest mb-2 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-nenrin-forest"/>
              Categories
            </h3>
            <p className="text-nenrin-text-light leading-relaxed">Light labels to group your work, like &lsquo;Work&rsquo; or &lsquo;Personal&rsquo;.<br/><i className="text-nenrin-forest font-medium">Try: &ldquo;set category Work for &lsquo;draft proposal&rsquo;&rdquo;</i></p>
          </div>
           <div className="p-4 rounded-xl bg-gradient-to-br from-nenrin-mist to-transparent border border-nenrin-forest border-opacity-8 transition-all duration-300 hover:shadow-lg hover:border-opacity-18">
            <h3 className="font-bold text-base font-nenrin-heading text-nenrin-forest mb-2 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-nenrin-sprout"/>
              AI Actions
            </h3>
            <p className="text-nenrin-text-light leading-relaxed">Optional, scheduled automations like a daily summary or quiet hours.<br/><i className="text-nenrin-forest font-medium">Try: &ldquo;daily task summary every day at 6am&rdquo;</i></p>
          </div>
        </div>
      </section>
    </>
  );
}
