---
title: 'Baballute: More than One Year to Implement Fewer Than Five Features'
date: '2024-10-19'
tags: ['php', 'nextjs', 'git', 'github', 'clean-code', 'wordpress']
draft: false
summary: Discover the challenges I faced transforming Baballute, a Mozambican cultural platform, from a messy WordPress project to a modern app, and the lessons learned about code maintenance, deployment, and consistency.
---

Baballute is a Mozambican platform dedicated to promoting and celebrating the rich culture, traditions, and stories of Mozambique. Check out the platform by [clicking here](https://www.baballute.co.mz).

This was one of the hardest projects I’ve worked on, and in this article, I will explain why—and how I finally tackled the challenges after more than a year.

## How It Started

![image](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuS8Cyjqg6pkm2q38i8UX-n8jz8FSfQQ4rQQ&s)
I won’t tell you the whole story, just a small part. **Baballute** was a project that existed before it was presented to me, and unfortunately, it was built using WordPress (nothing against WordPress—you’ll soon understand why).

Initially, my task was to directly modify the code of the template, instead of using the WordPress interface to make changes.

## Starting from Scratch vs. Working on Existing Projects

![image](https://ih1.redbubble.net/image.5377579432.1316/sss,large,product,750x1000.jpg)

The main issue with modifying the WordPress template code was that I had to deal with the worst code I’ve ever seen. To double the pain, it was written in PHP.
Working on someone else’s code means you have to read and understand what they wrote, which isn’t always easy. The code comes with the original developer's logic, beliefs, disorganization, and both good and bad practices.

When writing code, always think about a future scenario where someone else—or even your future self—has to work with it. If you don’t care about code readability and organization today, I guarantee you’ll suffer in the future.

Now, what about starting from scratch? Ohhh, God—it’s one of the best feelings! You get to decide the tech stack, architecture, and all the essential elements of the project. The downside? You won’t have to deal with someone else’s messy code.

The challenge with modifying the template, as I mentioned earlier, was that the code was not designed to be easily modified.

### Advice for Beginners
Work on existing projects—it will help you understand how real-world projects are organized, what works, what doesn’t, and how to approach things. Most tutorials on YouTube provide simplified scenarios that don’t reflect real-world challenges.

In my opinion, knowing how to read and adapt to someone else’s code is one of the most valuable skills you can develop. When you join a company, you’ll often be working on existing projects—not creating new ones from scratch.

**Note:** This was the first and last time I used PHP.

## Deploying Your App

Another important aspect is deployment—how your app goes live.

Ahhh man, I was deploying with FileZilla, using FTP to send code directly to the server. I could give you countless reasons why this is a bad idea.

One of the biggest problems was that I wasn’t tracking changes or managing code versions. This is where Git (not GitHub) becomes essential.

### Git vs. GitHub

Many people still confuse Git and GitHub, so let me clarify.

- **Git** is a version control system that helps manage code changes and track modifications. It’s completely independent of GitHub.
- **GitHub** is a cloud-based platform where you can store, share, and collaborate on code with others.

![image](https://i.redd.it/yvm6sjorpss21.jpg)

Initially, you work with a Git repository locally on your machine. To collaborate with a team or store your code in the cloud, you can use GitHub (or alternatives like GitLab or Bitbucket), which is the most popular option.

### Why FTP is Outdated

Once you’ve deployed an app using FTP, you’ll quickly realize why platforms like Heroku and Vercel exist. They save you the hassle of managing infrastructure.

When I decided to improve my deployment workflow, I had two options:

1. Manage the infrastructure myself, which would take time and money.
2. Use a **Platform as a Service (PaaS)**, which would simplify everything.

I recommend using Git, GitHub (or an alternative), and a PaaS as a combo to reduce overhead and boost productivity.

## Consistency is Key

Why did the project take so long? I wasn’t consistent. One of the reasons for that was my lack of motivation, mainly because of the tech stack I had to work with.

It took me a while to decide to start a completely new version of the project with a better tech stack, addressing the issues I faced with the WordPress version.

Be consistent when working on projects—making just 0.1% progress each day is better than stopping entirely, as if you’ve invented a time machine.

I have so much more to share about this project, and I’d love to discuss it further.

## Final Thoughts

Working on Baballute was a tough but rewarding experience. It taught me the importance of writing maintainable code, using modern deployment practices, and being consistent, no matter the obstacles. Every project, no matter how challenging, offers valuable lessons that shape you as a developer. If you’re stuck in a difficult project, remember—progress, even if slow, is still progress. And sometimes, starting fresh with the right tools and mindset is the best way forward.

## My Current Tech Stack

For the new version of Baballute, I’m using:

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [NextUI](https://nextui.org)
- [Supabase](https://supabase.com)
- [Strapi](https://strapi.io) (self-hosted)
