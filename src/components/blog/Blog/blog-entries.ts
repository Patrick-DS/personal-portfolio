// Third-party imports

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

export interface BlogEntryProps {
	itemId: number
	header: string
	date: string
	content: string
}

const blogEntries: BlogEntryProps[] = [
	{
		itemId: 1,
		header: "New article on Medium!",
		date: "29.11.21",
		content: `\"Fake news, truth, beliefs and biases\" : my [latest article](https://patrickdasilva.medium.com/fake-news-truth-beliefs-and-biases-e3529c86eb3e) on Medium! 
		
I was trying to write more technical content before, but I realized that it doesn't really motivate me to write; instead, it feels like work and brings me down. I wanted to start writing something a bit more refreshing for me, sharing my views on the world and hopefully spark some discussions. Feel free to let me know what you think in the comments!
		`,
	},
	{
		itemId: 2,
		header: "Job update",
		date: "30.02.22",
		content: `Yesterday, I announced to my colleagues at Staiy that my chapter with them as their CTO is coming to an end. We went through so much together, it's hard to believe it's coming to an end! I made so many friends along the way, and you all know who you are, so I'll just thank the founders Chiara Latini, Adrian Leue and Alessandro Nora for bringing me along this amazing journey into the sustainable fashion ecosystem, I've had the most insane ride with you guys!

I'm looking forward to going back to the reason I succeeded in the industry in the first place, which is to solve complex problems leading a team using things such as web infrastructure, data science, machine learning, DevOps, cloud computing, and constantly growing technologies. Of particular interest are the fields of sustainability, language-related topics (translation, education, chatbots, etc.), or 3D-modelling/CAD software, but I would be open to jump into a new industry if the opportunity were interesting.`,
	},
	{
		itemId: 3,
		header: "Break",
		date: "15.03.22",
		content: `I decided to take a month off to relax from my very exciting but also intense times at Staiy, that were preceeded with also very intense times trying to build my own company in a startup incubator, for a big total of 4 years of craziness. I was long overdue for a good break!

I still enjoy programming even to relax, it's the stress of the deadlines and the pressure of performance that stressed me out, combined with very little holiday over a very long period. So to enjoy my time off, I decided to have a look at Apache Spark and Scala, one of the most popular tools / languages when it comes to big data (big data = data that is too large to be *processed* on one computer for memory reasons, not storage).

Boy was I disappointed when I learned Scala is very close to Java, and that Apache Spark is based on Scala. Now I have to learn one language based on another language I'm not very familiar with. I've only used Java once while trying to toy around with a Minecraft mod, and Minecraft modding is not really like programming, you mostly fill in JSON files to get Minecraft to do what you want it to do. Nothing against Java per se, but it would have been nice to not have to go so far out of my comfort zone.

It's still reasonably simple to learn so far though. I like the idea of being able to make programs run on multiple computers working within a cluster!
		`,
	},
	{
		itemId: 4,
		header: "Job update!",
		date: "25.04.22",
		content: `
I recently decided to join a company as a full-time employee called Polar Squad! I've visited their offices today and I really liked it!

They really swear by two things I've noticed strongly so far: honesty and trust. Everybody is relaxed about everything around everybody because they all trust each other. That's something I hadn't seen in a long time. No work tension whatsoever! I'm hoping it's gonna stay like that. Fingers crossed!

To all recruiters out there I've interacted with so far: things that made me sign with them is (so you can tell your clients from my experience if you want to... or whatever!):

- They noticed my talent upfront, I didn't have to go through hoops to prove myself. Working as a CTO for two years, trying to build another company before that, when listening to me talk about my work experience they knew I knew what I was doing from hearing me talk. They also followed on my LinkedIn content to see what I was busy with.
- They told me upfront they don't like overtime and bonuses as a concept. The whole idea is to release the pressure from the employee so they can focus on just working. So taking that into account, I knew my time and work was gonna be valued properly. That's something most companies tend to outright ignore. No artificial tension is being created here.
- They gave me an offer -fast-. Two interviews and woop the contract. It's not that I needed a job fast, I had time, it's that showing no hesitation also shows respect.
- They showed me that they treat their employees with dignity and respect. A lot of employers say it but their voice feels tense while expressing it and their body language says otherwise. It gave me a very different vibe.

These things aligned with me, so that's what I chose!
		`,
	},
	{
		itemId: 5,
		header: "Status update @ Polar Squad",
		date: "15.05.22",
		content: `I joined only two weeks ago, and my office is the most welcoming place in the world. Home-office is also respected, you can work as flexibly as you want. If there was a word meaning the complete opposite to the word "bullshit", it would be Polar Squad.

- You have talent in DevOps?
- (Computer) networking, system administration, Docker, K8s, Terraform, AWS/GCP/Azure, these are things you'd like to work with?
- You have strong communication skills?
- You believe strongly in human values like respect and honesty?

These are things that made me join Polar Squad. Let me know if you're interested, I'll put you in touch!
		`,
	},
	{
		itemId: 6,
		header: "Personal comment",
		date: "19.05.22",
		content: `It's going to be much harder in the coming weeks in the area of tech to find a job as thousands of candidates flooded the tech market.

Candidates should remember, that even though the demand vs offer theory means they will suffer from the high offering for companies in their job search, they should still negotiate because their worth as competent human beings didn't change.

Companies should remember, these people just lost their jobs. This is not a period of "easy hiring", this is the time to be empathetic and improve your hiring process.`,
	},
	{
		itemId: 7,
		header: "New article on Medium!",
		date: "19.05.22",
		content: `Ever wondered what DevOps is actually about ? I sure did!

It's with that question that I went on to discuss with my colleagues to figure out what Polar Squad is doing in the DevOps community. Why DevOps? How is it different from system administration? Who needs DevOps and why? These are the kinds of topics I investigated and [this Medium article](https://patrickdasilva.medium.com/a-birds-eye-view-on-the-world-of-devops-42118bf3ebf0) summarizes my findings.

Get in touch with [David Thalmeier](https://www.linkedin.com/in/ACoAACjaheQB2vrZGh-JblQcbrlDx_MEjRBazug) if your organization needs support in the DevOps area!
		`,
	},
	{
		itemId: 8,
		header: "Personal comment",
		date: "19.05.22",
		content: `I don't know how many of you can relate to this coming from IT.

For every job I started since I worked in IT, I had experience with about 10 to 20% of the skills required for the job (which is unusual after some years in the sector, you usually get hired for experience). I learned what I had to learn to get the job done, and then solved problems. Once the problems were solved, I would either find new problems within the same company, or move on with another. The next company had interesting problems, but very little skillset overlap between my skills and the requirements. So I moved on and learned more things, and the pattern kept going.

So now I have 1 year experience in this, 2 years experience in that, but I've been working for five years and for my current job, I had again very little experience in the things I'm trying to do. But I'm hoping that the same will happen again: I'll solve problems, learn what I have to learn and become valuable.

I'm glad that Polar Squad took a shot at me and gives me the room to grow in the space of DevOps, but for instance when building my personal brand on LinkedIn, I'm constantly thinking: should I focus on DevOps? Should I write about my frontend experience? Backend experience? Machine learning experience? Mathematics & Academia?

I think about a bunch of things all the time, and I get the annoying feeling that if I talk about whatever I want, I'm going to be too spread out and lose my audience. But then again, if I focus on a specific topic, people get a very narrow picture of who I am, making my personal brand unnatural and uncomfortable to myself, so I end up writing much less.

I'm open and happy to hear about any wisdom on this! 
		`,
	},
	{
		itemId: 9,
		header: "Update",
		date: "03.09.22",
		content: `🎉 I just reached 2, 500 followers! 🎉

A few months ago, I thought to myself that I'd try to understand how LinkedIn works and expand my reach to spread my message which I thought was relevant. What I was learning at [Polar Squad](https://www.linkedin.com/company/polarsquad/) was refreshing but also liberating and empowering, so I felt like I had something to say and started to build an audience.

Fastforward to today, and this audience is still growing! I wanted to thank the people who are interacting with my content regularly, and give a short introduction to what I do to my latest followers:

👉 I'm a DevOps consultant at [Polar Squad](https://www.linkedin.com/company/polarsquad/). That means that me and my colleagues can help you with anything related to #devops , which includes of course infrastructure and automation (on-premise or in the cloud), but also with culture, lean, measurement and monitoring, and #haring and documentation problems. The whole thing is abbreviated as CALMS which is a philosophy that I'm quite fond of! If you or your company needs support with any of those topics, please contact me!

👉 I have a mathematics background and I've been wearing many different hats in IT: Data Scientist, Machine Learning Engineer, database administrator, system administrator, frontend developer, backend developer, tech lead, CTO, now DevOps consultant. So when it comes to technical topics, I'm pretty well - rounded! But more importantly, anything you wanna discuss, I'm down! Feel free to reach out.

👉 I'm happy to discuss with you about anything related to your tech career! I'll support you in anyway I can; finding a new job, debugging code, defining your learning journey, anything.I've already had quite a few meetings on Google Meet with complete strangers from all around the world just for the sake of helping out, and I'll keep doing it!
		`,
	},
	{
		itemId: 10,
		header: "Podcast appearance",
		date: "07.09.22",
		content: `Recently I joined [Joe Bignell](https://www.linkedin.com/in/ACoAAAQTN4QBkOVMEL0LitOlR1Bxd_kXRwMH1hc) in his [DevOps For Everyone](https://www.linkedin.com/company/devops-for-everyone/) podcast! Check it out if you want to hear more about the philosophy behind DevOps that we have at [Polar Squad](https://www.linkedin.com/company/polarsquad/)!
		`,
	},
	{
		itemId: 11,
		header: "Update",
		date: "10.10.22",
		content: `I'm flying to Helsinki today!

Looking forward to work with my colleagues from [Polar Squad](https://www.linkedin.com/company/polarsquad/)'s Helsinki office!

Since I joined [Polar Squad](https://www.linkedin.com/company/polarsquad/) I became fascinated with the Finnish language. For those who know me well, this is not a surprise! Let's see if within my 2 months stay, I can figure out how to order food without ending up with my foot in my mouth!

Any DevOps events in Helsinki you think I should check out? I'm in town until December 1st!

Nähdään pian!`,
	},
	{
		itemId: 11,
		header: "Announcement",
		date: "20.10.22",
		content: `Our co-founder at [Polar Squad](https://www.linkedin.com/company/polarsquad/), [Teemu Korpela](https://www.linkedin.com/in/ACoAAAxghSYB5xbgHJUBGQDJ3MljRfiPIIQMcF0), once said to me:

"DevOps is a philosophy about how to do things. You can even do DevOps in the kitchen if you want."

That sentence really resonated with me. Once I understood what DevOps was about (and its five pillars, summarized by #CALMS), a lot of the things I did gained a framework for expression. It's one of the reasons I'm so vocal on LinkedIn about DevOps.

I wanna push that to the next level and start talking about applying DevOps to other stuff. I'm currently in Finland until December, so I'm going to talk here about applying DevOps to learning languages, in this case Finnish. I'm hoping it gets people to understand what DevOps is really about and makes them better at #engineering

Now I'm not gonna bore you with the inner workings of the Finnish language as that will make me lose over half my following! But I'm going to inspire my posts from my current learning strategies and showcase how the same philosophy could also apply to you when doing anything, including learning a spoken language (or say, a programming language!).

Lots of cool content incoming, so hit that 🔔 to get notified and let's start doing some DevOps!`,
	},
	// PART 1
	// 	DevOps applied to learning Finnish: Part 1!

	// We always tell parents of new- born babies to talk to them even if they don't understand. That's for a very simple reason: they need exposure.

	// A baby takes over six months to utter their first words, yet an adult can pick up first words in another language in minutes.So we should be able to learn another language quickly, right ? Actually, with the right amount of exposure and dedication, it can happen within 6 months, regardless of your grammatical knowledge.I'm not saying you'll be Shakespeare in 6 months, but you'll be able to converse and express yourself in writing, plus or minus mistakes here and there.

	// How to learn so fast ? Well, it takes a lot of consistent, regular effort.To be able to sustain that, the #culture aspect is super important.That's the actual magic: create the right environment for yourself to be able to sustain the effort.

	// 👉🏻 I surround myself with people who are happy to see me learn. Knowing less than a hundred words will make me sound like I have the maturity of a 2 - year old, so the people I try to speak with have to be comfortable with that - and - make me comfortable looking like that.Otherwise I'll be feeling isolated and want to switch languages (in other words, give up).

	// 👉🏻 I find places where I'm comfortable just sitting down and eavesdropping on conversations (without looking creepy!). My current trick is to just listen in on my colleagues' casual chit - chat in the office; I don't understand much, they don't mind since they do it out in the open anyway, but I'm at least practicing figuring out some of the words they're saying! Even if I learn just one word in a whole conversation, that's one word I didn't have before.When I was learning German, it was with a board game night; I could play the game without having to speak much, but I could listen to my friends playing and read the instructions on the games' things (cards, game board, instructions, etc.).

	// 👉🏻 Having a tandem partner is very cool.Basically, you sit down and exchange struggles! It can be a bit awkward at times... imagine if two babies tried to teach to each other how to speak ? Exactly.But it's a very simple way to be in a place where you can ask questions openly about how people would say this or that!

	// The important thing is not the specific actions I took, but the fact that they gave me a chance to learn and keep me motivated.If you're learning a language, think about what you'd be comfortable doing and do that!



	// PART 2
	// 	DevOps applied to learning Finnish: Part 2!

	// I want to discuss the #automation aspect of learning Finnish.As you would guess, Docker, Kubernetes and Terraform are not going to be of much use in learning Finnish, so we need to go back to the basics:

	// 	Automate the tasks which are repetitive(in learning Finnish).

	// So what are my repetitive tasks ? And how do I automate them ?

	// 👉🏻 During the day, there's plenty of moments where I would like to say something but the word doesn't come out.But when I reserve some time for myself later to study, I also don't remember all those little things I can't say because there's so many of them. So you can use whatever you want, but I use Trello to write down the words, expressions, grammar rules, etc. that I wasn't able to say previously.This fills up my "to-learn" list and makes me focus on the things that really matter * to me * !Because I actually wanted to say those things.

	// 👉🏻 I learned how to count to 100 by writing all the numbers by hand, multiple times.Why ? Well, copy - pasting the numbers on a text file from a website would be "automated", but it doesn't automate the right thing: the task of learning and remembering how to say the numbers. Sadly, this is a task that *requires repetition*. So instead of automating the task itself, I make sure I have as many occasions as possible to count! The first time I wrote them all by hand (seeing them once really helps!) but now, I'm counting the number of reps at the gym, the number of people in a queue, the number of seconds I wait at a red light, etc..so I managed to automate "memorizing numbers" by integrating it into my lifestyle!

	// 👉🏻 I need people to speak to, otherwise I will never have real - life conversation experience and this all stays theory.So of course I can meet people in real life and hope they want to spend time with me teaching Finnish, but that's "not very scalable". So instead I use the Tandem app, which allows you to find Tandem partners for free! A tandem partner is someone like you who wants to learn a language that you know, and you try to learn a language they know, so you become language buddies and meet to try saying stuff to each other and ask questions. It's very useful and works in so many languages! Plus, you can find as many partners for as many languages as you want, hence the #automation aspect.

	// You see ? The philosophy behind DevOps can work even when you're not trying to build software. Just follow the five pillars of #CALMS and you'll have #agility!

	// In the next post, I'll show you how to keep your (financial and emotional) costs low by being #lean while learning a language!

	// PART 3
	// 	DevOps applied to learning Finnish: Part 3!

	// It's easy to get discouraged when learning a language because memorizing so many new concepts inevitably leads to tons of failures; it's just part of the learning process and how the brain works.

	// So to make sure you embark on a sustainable learning journey, it's important to be #lean and keep things small to have the motivation to perservere until fluency.

	// 👉🏻 The overall goal is big(learning Finnish, or any language for that matter), but the steps don't have to be big. Break down the large goal in small steps:
	// 	- Learning how to conjugate certain verbs
	// 		- Learning vocabulary in different aspects of the language(sports, family, food, the latter can even be subdivided into fruits, veggies, desserts, etc.)
	// 			- Learning expressions
	// 				- Learning grammar and syntax rules(those should definitely be broken down and taken one at a time!).

	// 👉🏻 I like using Trello to lay out the concepts I want to learn, so that when I am in the mood to study, I have a bunch of things I can select and start working on.

	// 👉🏻 The biggest challenge in the learning process is to maintain motivation.So instead of taking on pressure with "I need to learn this topic by that date", it's more important to think of "this is my list of learning topics, I need to do at least 20mins/day or 30mins/day" because you don't know upfront how much time you will need to learn a certain thing.

	// So being output - oriented might make you lose motivation, whereas focussing on being consistent with the learning process will ensure that you never stop growing.With this technique, sometimes you're going to be really in the mood and end up going way over 20 minutes! It really works!

	// PART 4
	// 	DevOps applied to learning Finnish: Part 4!

	// The worst part of learning a language is the constant feeling that you're not getting there. At all.

	// So it's important to #measure your progress. There's many good reasons for that:

	// 👉🏻 You want to know that you're not wasting your time. If I was putting in all this work only to feel that I would need 20 years of practice further to speak fluently, I would give up tomorrow. Seeing that I'm making progress makes me want to make more progress.So it's a bit psychological in this regard.

	// 👉🏻 Knowing what you know by writing it down also means you get to know what you don't know, and therefore you can plan ahead and schedule something to learn in the next learning session.

	// 👉🏻 A very simple way to measure your progress is also to just ask for feedback! You'd be surprised how many people would remind you of how well you're doing and point out the great things you've achieved that you barely even noticed, but it happened because of the #work you put in.

	// This is true about learning a language but even more true in software: that one time that you managed your way out of a situation just because of the grind and effort that you put in beforehand that made it look effortless, it really wasn't effortless, it took a lot of work to get there; and pointing that out is very valuable.

	// PART 5
	// 	DevOps applied to learning Finnish: Part 5!

	// Learning a language is about figuring out how to interact with all the aspects of that language's community. So of course, it's crucial to share with that community!

	// 👉🏻 I hang out with as many Finns as I can! It helps that they're really fun to hang out with 😄 (they're a bit more social with a beer or two in them, I have to say!). But it's in those contexts where I pick up about what it's like to be a Finn and which words and expressions actually get used in practice.

	// 👉🏻 I show them my progress! If I learned things I found weird or funny, or even a strange mistake I made, I put it out there! My experience is that as long as you're doing it for the right reasons, people love to see another person's experience.It gives them a different perspective on their own journey.

	// I have a wall at my place(see picture) that I use to show anybody coming in the stuff I've learned so far (verb conjugation, some sentences, learning how to count, etc.). It does look a bit freaky, but it always gets people to start a discussion about Finnish which I always enjoy!

	// PART 6
	// 	In case you haven't noticed, I concluded my "DevOps in learning Finnish" series!

	// The reason is pretty simple: there are five pillars to the DevOps philosophy, summarized by the acronym CALMS:
	// 	- Culture
	// 	- Automation
	// 	- Lean
	// 	- Measurement
	// 	- Sharing

	// and that's all there is to it. So that's why the series was in five parts!

	// I plan to give an update on how that philosophy worked out for me when I'll be on my way back from Finland to Berlin!

	// As for DevOps itself, after the results of my recent poll, I plan to write how DevOps can apply to the field of development(and - not - of infrastructure & deployments).My latest interest has been in exploring the capabilites of GraphQL to be able to query from multiple data sources and speed up frontend development while simplifying backend development with a microservices architecture.

	// See you in the next posts!
	{
		itemId: 12,
		header: "Personal comment",
		date: "03.11.22",
		content: `Agility is what all the tech companies are trying to achieve.

Kubernetes, Docker, Terraform, CI / CD pipelines...these are tools to get there.You may or may not need some of them, or you might need them only at certain stages of your company.

CALMS is the acronym summarizing the 5 pillars of DevOps:
- Culture
- Automation
- Lean
- Measurement
- Sharing

The Agile framework is just an organisational tool, it's not "culture". Culture is what defines you as a company; your values, how you embody those in practices.

That's why I avoid the word "agile" like the plague when I'm discussing the benefits of the DevOps; you don't -want- "agile", you want *agility*: the ability to quickly adapt to a rapidly changing environment (the market, employees coming and going, users wanting different features, budget not being consistently available, etc.).

A bit like when you're building a house, you want a stable, secure, comfortable and affordable house; you don't "want" hammers, nails and screwdrivers.
		`,
	},
	{
		itemId: 13,
		header: "Personal comment",
		date: "12.11.22",
		content: `I've been pretty vocal about DevOps in the last few months, but this is a relatively new chapter in my career. A few years ago, I was heavily invested into NLP, the subfield of machine learning focused on text data and languages.

Recently, someone thought funny that they found this old video (see link in the comments) where I'm reviewing a marketing service my business partner at the time Tomás Ignacio Moyano and I received from the very talented Alexis Rondeau! It felt good to see how much I've changed since, but also how at the core, my ideals haven't changed.

👉🏻 I want to help people. That's why I accepted to do the video in the first place! I was really excited to do it!
👉🏻 I like to understand and explain complex topics in simple ways, to then bring people that understanding. (It means I ramble a lot too, I could tune that down sometimes!)
👉🏻 I'm infinitely curious. That's why I liked Alexis' marketing service back then! He brought us the fundamentals of marketing in a few very simple and concise sessions.

What qualities do you think give you an edge in the field of software?`,
	},
	{
		itemId: 13,
		header: "Announcement",
		date: "14.11.22",
		content: `I will be speaking at [RELEX Solutions](https://www.linkedin.com/company/relexsolutions/)' Helsinki Data Science meetup! I'd love to see you there, and for those who are not in Helsinki, it'll be live-streamed! I'll put the link up when it's available.

MLOps, what is it, really?

I've seen so many machine learning projects fail over the years, both where I worked and in companies around me in the ecosystem. We hear about the big successes, but why do so many fail? I believe that if the DevOps philosophy was applied correctly in this context, those projects that were bad ideas would fail faster (leading to time & cost savings that can be better used), and those that were good ideas would have a much higher chance of success.

As always, the devil is in the details. I'm hoping to see you there!`,
	},
	{
		itemId: 14,
		header: "Personal comment",
		date: "13.12.22",
		content: `"Tech is easy, people are hard."

I love this quote from one of our former colleagues.

Don't get it wrong, it's not saying that learning how to be proficient as a technical person is easy. It's a statement about doing business.

You want to build a technical product? Easy. Find experienced people, tell them what you need, they'll build a technical product. As technical as you want.

You want people to build a product
- that your customers want?
- in a given timeline?
- with a given budget?
- that's maintainable?
- that scales well with the size of both your customer base and your team?
- that's worth something if your company makes an exit?

Good luck. That's really hard. Respect to you if you made it. That's because there's so many people involved, it can go wrong in sooo many ways.

Just look at the business model of VCs for example: they try to find the best companies to invest in, say no pretty much all the time, and yet they expect one out of twenty successes to pay out for the other nineteen semi-successes and failures. Clearly it's not easy to bring people together if those considered the best succeed only 5% of the time.

That's why I love Polar Squad's DevOps assessment so much. It's a 360 overview of your software company's situation, but with a huge emphasis on people. Even if the problem is technical, the solutions we propose in our report take into account the team you've built, the objectives you have and the state of the product(s), among many other things. We also propose solutions on how we can help you apply the suggestions from the report on how to move forward with our report. A true problem-solver!

I wish I had something like this in my previous companies!`,
	},
	{
		itemId: 15,
		header: "Polar Squad update",
		date: "14.12.22",
		content: `My colleague Janne Sinivirta at Polar Squad took the time to write an amazingly well-written blog post about pull requests!

I love how he goes to the heart of the reasoning behind the idea, the philosophy that comes with it, and its consequences with pros and cons.

I worked mostly in small tech teams. Even as a manager, I always felt a bit unprofessional that I was not relying so much on pull requests.

I was mostly letting my devs (and myself) work on our feature branches, and when a feature would be ready, I'd ask them to try to merge it locally to see if I should expect any merge conflicts.

When there was a conflict, if they didn't know how to resolve it (because it touched code they didn't know), we'd have a meeting. Otherwise, they'd send me a message, I'd look over the code, run the tests, and see if they missed anything that they could then keep working on or if it was all good, it would get merged and deployed.

It sounded simple and efficient. Turns out it was:
- Agree on the way to collaborate and communicate.
- Do it consistently.
- Work as a team.

There's no unique way of doing things, but if it works well, why change it if you can't find better?`,
	},
	{
		itemId: 16,
		header: "Personal comment",
		date: "20.12.22",
		content: `As people gain experience in tech, I've noticed they tend to stop wanting to do the technical, manual, tedious work and move to wanting to solve social, cultural and business problems instead.

I think it's because after a while, it gets tiring to notice that by ignoring the cultural side of things and focusing on technology, you're missing out on the bigger picture and can't see where the really hard problems are.

If you code away features but they are not necessary for the end user, don't help the business, are going to be deprecated way too soon, budget is not available for them to be finished, etc....

You're wasting your time.

And as you get more experienced, you want to stop wasting time.

So you get your hands dirty every now and then, but you focus more on the people and business requirements than on the code.
		`,
	},
	{
		itemId: 17,
		header: "Kubernetes series",
		date: "09.01.23",
		content: `Starting next week, I will start documenting my journey of learning Kubernetes and Terraform. I think it's relevant to discuss what it's about, how to use it, but more importantly -why- to use it. These tools are simple in theory but are incredibly detailed and complicated to master because there's a lot to take into account when maintaining them.

So far I like that they abstract away a lot of pains that I had during my career as a developer. I will try to point those out, as well as how to solve it at different scales of a company.

Because I didn't master those tools, I felt like contributing in my company by making use of my soft skills instead, but after some reflection I realized this was not the best avenue for me. I have always been a technical person at heart and always will be, although business aspects of work will keep playing a role.

There's always room for more learning! Stay tuned for the next updates.`,
	},
	{
		itemId: 18,
		header: "Kubernetes series",
		date: "14.01.23",
		content: `The first thing I bumped into when beginning with Kubernetes is pods.

Kubernetes pods are the basic unit of abstraction when using Kubernetes. They are the ones running the processes that are needed in order for your software to function.

I always wondered, why the extra unit of abstraction? Why not run and manage docker containers directly?

Well, containers serve their own purpose: run a process.

But pods serve a different purpose: orchestrate the running processes within the platform.

If you want to have more copies of a container's process running (say, an API), you could create more copies of the running container, but if that container needs other containers next to it or has to be configured a certain way within your network, this information won't be directly in the container itself, it will be "outside of it".

If your container stops for an unknown reason, the pod can still exist and has a state. So Kubernetes can know what to do with it: terminate it and create another one for instance.

The pod allows you to encapsulate that information in one convenient abstraction, so that once it is configured, you can just add and remove pods without having to worry about all the orchestration required around your containers.

After all, Kubernetes is about orchestration; so it makes sense that its basic unit's purpose is to orchestrate.

That's what I understood about pods at the high level. Any comments on that? I'm open to discussion.`,
	},
	{
		itemId: 18,
		header: "Kubernetes series",
		date: "14.01.23",
		content: `When I came across deployments for the first time, I couldn't believe how such a simple idea could have saved me hundreds of hours of debugging if I had this for myself.

The idea of a deployment is to maintain a set of identically configured pods running.

Let's say we want 3 copies of our server to be running to handle the workload. A deployment will try to keep 3 pods running at all times. If one pod stops working, it would get killed, and a new pod would be instantiated.

Pods in a deployment belong to a replica set(which is basically the set of pods plus labels used to determine that the pods belong to that set).The deployment's job is to make sure that this replica set looks the same at all times: in our example, that means 3 pods in the replica set running.

The cool thing about deployments is that they are easy to edit.If you want to update a pod(to add a new feature to your server for instance), the deployment does a rolling update of your pods in the deployment to prevent downtime; in other words, it kills some pods and creates the new ones, but makes sure that there is at least a certain percentage of pods in the replica set running at all times.

How many hours have I wasted in previous companies manually reconfiguring and restarting my servers.If only I had had a way to manage my configuration and my server's state!`,
	},
	{
		itemId: 19,
		header: "Personal update",
		date: "07.03.23",
		content: `I haven't posted in a while since I was called in sick for over 2 months. An eye problem that took forever to diagnose. So even though I was commenting here and there, I wasn't officially working.I started working again yesterday, which feels pretty good.I missed Polar Squad!

Today was a big milestone for me. Personal post time - I usually stick to DevOps, but not today.That can wait until tomorrow!

During that time, since I had an eye problem that prevented me from looking at screens more than 5 minutes without headaches and itchy eyes, I couldn't work. But I felt just fine off screen, so I had to find something to do with my time.

- I could have gone into depression, the winter weather is definitely prone to that.But after 3 years of stress and high workload, I wanted to make changes.
- I listened to a LOT of audio podcasts.It gave me a lot of insights on what I can improve in my life to feel better.
- I restarted taking care of myself: gym, meditation, stretching.The easiest way to feel better about yourself is to start with what you feel with: your body.
- I spent a lot of time discussing personal topics with friends I haven't been touching base with for a while, especially Phillip Gapp ; thanks, my friend!
- Last but not least, a book suggested by Matthew Ehrlich 👨‍💻 changed my perspective towards how I eat, and I started changing my diet to lose weight.The book is called "4-hour body" by Tim Ferriss, and it's amazing because it obviously contains the commonly known facts about what to eat/not to eat, but more importantly it discusses the psychology behind our habits and our diet, and how to work in small steps to progressively get to a better place.

My first step was to snack peanuts instead of chips when I felt snacky; it's mostly fat instead of mostly carbs, so even though it's not exactly the healthiest thing, at least I could do it; then I switched some of the peanuts for hummus and veggies.But all that took two weeks! Slow but steady is the key.

Around the first week of January I was fully on the diet, and 6 weeks later, I lost 6 kgs.One kilo a week! And of course I'll keep going. I had been doing sports, going to the gym and cooking at home hopelessly for the better part of the last 5 years and weight just kept piling up. Today I'm below 100 kg for the first time since I can't remember, at least 5+ years. So I'm definitely grateful for that. Thanks Matthew!`,
	},
	{
		itemId: 20,
		header: "Kubernetes series",
		date: "17.03.23",
		content: `I'm restarting my series of posts on my Kubernetes learning journey! It's good to be back, and with it comes getting my hands dirty on the cloud.

Kubernetes sounds really complicated from the outside, but it's actually trying to keep things so simple. One of the concepts that makes me feel that way is when trying to solve the problem of assigning tasks like running containers (or more correctly, running pods) to nodes in your Kubernetes cluster. What we want at the end of the day is that Kubernetes takes care of it, but it might be that certain containers have certain pre-requisites about which nodes they should or shouldn't be on, or certain nodes should be reserved for certain tasks.

That's when taints and tolerations come in. A tainted node refuses to take on the task of running a pod that doesn't tolerate the taint, and a tolerant pod can be assigned to a tainted node of the corresponding taint. So all we have to do is assign taints to nodes and tolerations to pods in the form of text-based labels, and Kubernetes takes care of assigning the pods according to the requirements of your deployments, daemonsets, etc. to be able to run those pods.

Stay tuned for more on this series about Kubernetes!`,
	},
	{
		itemId: 21,
		header: "Kubernetes series",
		date: "18.03.23",
		content: `The Kubernetes series continues!

In my previous post, we discussed taints and tolerations, which prevents certains pods from being placed on undesired nodes.

But what if we want to place a specific pod on a specific node? There's also the concept of *node selectors*, which basically tells Kubernetes where to place a specific pod before other pods (those without selectors) are assigned, using labels on the nodes to locate it. It does the job, but if you need more complex assignment logic, there's also the concept of node affinity, which allows for "AND"/"OR" logic to determine which selectors should be on the node on which the pod is to be placed.

Have a nice day, and stay tuned!`,
		// Bonus today: a reasonless random picture of me, because why not.
		// [insert image here]
	},
	{
		itemId: 22,
		header: "Personal announcement",
		date: "20.03.23",
		content: `I've recently passed the CKAD (Certified Kubernetes Application Developer) certificate exam!

I have to say, getting ready for that exam definitely made me learn a lot. If any of you are considering getting serious about Kubernetes, try passing that exam, and also consider the CKA after (which is what I plan to do next)!

It's a -lot- of work, and you have you be quick on the keyboard (and become a kubectl & VIM ninja!), but it's not so complicated. So with enough patience and motivation, it's possible!

Let me know if you consider taking that certificate too, I'm happy to share insights!`,
		// [insert image here]
	},
	{
		itemId: 23,
		header: "Kubernetes series",
		date: "24.03.23",
		content: `In my previous posts about Kubernetes, we discussed taints and tolerations, and together with node selectors and node affinity, one can have control over pod placement on nodes. This is all good and useful, but it requires work from a DevOps engineer and is manual labor.

The next-gen pod placement tool is already here! At Polar Squad, we wrote a white paper about cloud cost optimization and we talk about Spot by NetApp, a product for optimizing resources usage with Kubernetes. You get to rely on a very powerful feature from cloud providers called "spot instances", which are short-lived nodes that come at a fraction of the price. If Kubernetes can manage the short-lived nodes by keeping the pods alive across those nodes, spot instances can bring real cost savings, but they are a bit harder to handle with code, so Spot is a machine-learning based tool that does precisely that: study the workload on your pods to determine what kind of spot instances they can handle with the goal of achieving reliability and cost optimization at the same time.

I also really like their pricing model: Spot's revenue comes by taking a cut on the savings you made, effectively bringing no additional financial cost to your company. Sounds like a dream come true! Spot by Netapp is probably the coolest application of AI-Ops that I know of, i.e. machine-learning applied to optimizing DevOps-related processes.`,
	},
	{
		itemId: 24,
		header: "Kubernetes series",
		date: "07.04.23",
		content: `I'm starting a project with Kubernetes!

It's a toy project, where I'm going to build a very minimal frontend, backend, and database, but my goal will be to rely on Kubernetes features to make it happen.

I went through the CKAD course, but I always got the feeling that this wasn't the "real" way people use Kubernetes, because everything was done from the console both in the course and the exam, and there was no usage of git, very little usage of YAML files, and more importantly, I always assumed the problem was on the Kubernetes side. What if it's in the application? I can't know until I do something by myself!

There's also no better learning experience than getting one's hands dirty. I've been also very inspired by some of you here who are #buildingInPublic! I feel like it'll also be the best way to prepare for the CKA certification! Probably an overkill, but I don't just want to have the certificate, I want to actually have some experience under the belt.

I'm happy to hear about your own experience and others among yourselves who are learning about DevOps in public! Share in the comments!`,
		// https://github.com/Patrick-Da-Silva-PS/kubernetes-ping-pong
	},
	{
		itemId: 25,
		header: "Kubernetes series",
		date: "12.04.23",
		content: `I had a good networking fight today while working on my Kubernetes project.

So, the main feature that I wanted of my project is that I have a K8s deployment that I can scale up and down in terms of number of pods, and each pod has a server (a little API, in this case written with NestJS) that generates its own random identifier on startup. They would then register those identifiers in a database, and a cronjob would select one identifier at random, and then contact one of the servers at random. If the server has the identifier in the request, it would respond successfully, otherwise it would log in the request that it saw it, but it would "ping pong" it to another random server, and this ping pong continues until the server corresponding to the request receives that request, and then I would log the journey of the request.

That's why I called it the "Kubernetes ping pong" project. Those servers ping-pong the request to each other until it stops. (I could use another way of stopping the ping-pong game, but that's the approach I chose so far.)

In my last post, I discussed how I wrote the code for the server that auto-generates its own identifier. It has a "/health" endpoint (for the K8s readiness/liveness probes), a "/config" endpoint to check that my configmap loaded properly, and a "/play" endpoint (for the game).

I didn't have any trouble setting up 1 server. I was planning on relying on a Kubernetes service to randomly assign requests to one of my many servers after scaling up my deployment. But instead, I encountered a nasty friend called the "Connection: Keep-Alive" header, which is a default header (for good reasons I guess). I wanted consecutive requests to /play to go to different servers, but I kept seeing the same server return its identifier over and over. I had to switch browsers to get a request send to another random server.

Had I not well-tested every step of the way, I might have thought something is wrong with my server. But I could see my various pods with their configmaps, curl the servers individually, everything was fine. Hm. So something was locking consecutive requests to a server.

Turns out I didn't want that header, killed it, and now I can keep going!

I'll post again when I'll have something to say about setting up the ELK stack!`,
		// https://github.com/Patrick-Da-Silva-PS/kubernetes-ping-pong
	},
	{
		itemId: 26,
		header: "Kubernetes series",
		date: "19.04.23",
		content: `I have been fighting for the better part of last week and yesterday with the ELK stack. Setting up ELK in Minikube is really using up my patience!

Don't get me wrong, I have figured out at this point that setting up ELK in Minikube is not the best idea. For starters, there's an issue if I try to spin up multiple nodes in my Minikube cluster, because Elasticsearch relies on StatefulSets (to store the data!) that are not getting configured properly when using Minikube's VMs. I don't wanna fight with the Helm chart to make that work... I'll use one node for now, we'll see what I feel like doing later!

I just need to get it working locally, and then I'll work on how to deploy it to AWS! It's also been a good opportunity to learn and practice using Helm charts 🤓

I'm just really looking forward to getting my app's logs being collected by Filebeat, processed by Logstash, indexed by Elasticsearch and visualized in Kibana. Patience is my friend!

If you have a look, let me know what you think! It's not much for now, I'm trying to configure the Helm charts I pulled from the Elastic repository at artifacthub.io!`,
		// https://github.com/Patrick-Da-Silva-PS/kubernetes-ping-pong
	},
	{
		itemId: 27,
		header: "Podcast appearance",
		date: "21.04.23",
		content: `Recently I had a great conversation with [Matthew Ehrlich 👨‍💻](https://www.linkedin.com/in/ACoAACkDxJoBuTwnVft0hkQae_lS7FUN7EB18JY) and [Eric Winkelspecht](https://www.linkedin.com/in/ACoAAB9xWvMB9OrhK1Fhc5Js5A8097KOhtZktSI) on their [Self-Taught Devs](https://www.linkedin.com/company/self-taught-devs/) podcast, talking about my personal journey out of academia and into self-taught software development.
		
They are really good interviewers! Very professional and fun to talk with. If you haven't had a listen at their podcast, it definitely contains a few gems! Check them out on Spotify. We discussed things like how beginning in the industry looks like, challenges one wouldn't expect when beginning, and how the philosophy of DevOps now drives everything that I do, at work and outside of work.

Link to the podcast: [click here](https://podcasters.spotify.com/pod/show/self-taught-devs)!`,
	},
	{
		itemId: 28,
		header: "Kubernetes series",
		date: "23.04.23",
		content: `Yesterday, I had a great conversation with my colleagues on deep-diving in my Kubernetes setup for using ELK!

There's a lot I don't know about networking. A lot of times, I feel like I don't know how to debug a problem that I have, but it turns out that the way to debug things properly is to "just know" how to do it, which can turn out to be extremely frustrating. So it was great to get a tour of my current setup and break it together with my colleagues that had more experience with it!

I haven't managed to make much progress in the last two weeks, but that meeting gave me a lot of clarity on why I was stuck for so long and didn't feel like I could move forward. I took a ton of notes! That's often what learning looks like: banging your head against a ton of walls, until there's a short moment of clarity, a "AAAAH" moment, and the cycle continues.

Update on the project coming as soon as I'll have incorporated those notes into my project and I have a new feature up and running! 😎

Thank you guys [Alexander Ivanov](https://www.linkedin.com/in/ACoAAALndUUBKBQpvMH-Y7L1t-H42CLbJlN41AQ), [Adrian Antunez](https://www.linkedin.com/in/ACoAAArL4tcB9x0ERSpVtqqPGJqftHwDuwwwWPY) and [Jose Sánchez del Valle](https://www.linkedin.com/in/ACoAAAjdh6wBswtKNAYtnS3l6uxSXpYwH9EF03Y) for joining our session! It was fun. Let's do something similar soon!`,
	},
	{
		itemId: 29,
		header: "Announcement",
		date: "27.04.23",
		content: `[Polar Squad](https://www.linkedin.com/company/polarsquad/)'s [DevOps self-assessment](https://polarsquad.com/devops-self-assessment) is here! 🎉

My colleague [Balázs Szakmáry](https://www.linkedin.com/in/ACoAAANJSEgBcGVi39jtIBTvl-1w650q5QbTNl4) and I both had the same idea at different times, so when we realized it, we teamed up and got it done. I'm so happy we can take initiative at Polar Squad and make things like this happen!

It's a web-based questionnaire on our website that anybody can take if they want to figure out what the state of their current DevOps-related practices is. Check it out! You'd be surprised what you can find out in just a few clicks.

I'm also very eager to hear about your current situation! If you think you could improve your DevOps practices, let me know and we'll see what we can do to help you!`,
	},
	{
		itemId: 30,
		header: "Job update",
		date: "01.05.23",
		content: `Last week marked the beginning of my second year at [Polar Squad](https://www.linkedin.com/company/polarsquad/)! 🔥 🚀 (and my birthday!)

I think I could summarize that year for me in one word: #growth

There was a lot of learnings, both on the technical end on improving my skills with AWS, Kubernetes, Docker, Terraform, CloudFormation and others, but the strongest learning was on the emotional end.

When I joined Polar Squad, I was exhausted, and I just wanted all my problems to go away. On a personal level, saying it made me appear bitter and grumpy is an understatement.

But I somehow found this company full of empathy and understanding, and they accompanied me back to my normal self by seeing my potential and being patient. I am just blessed to be working here! I wish everybody could be in a company where their skills are valued and they feel safe to express their creativity, their concerns and ultimately thrive in an ideal environment.

It's even more a blessing that our job is literally to bring this atmosphere to other companies by improving their processes, both technical and cultural! We are so easily influenced by our environment; being in an optimal environment is one of the safest and proven ways to ensure growth!

Have a nice weekend everybody!`,
	},
	{
		itemId: 30,
		header: "Personal comment",
		date: "01.05.23",
		content: `I couldn't stand seeing such a motivated person trying to change careers for so long and work so hard and well, without satisfying results. I had to do something!

Most of you don't know this, but when I left academia, it took me 13 months to find my first job.

Thirteen.

That's a lot of months with no pay. But I didn't want to stay in academia anymore, and my passion for mathematics was holding me back from putting myself out there.

[Matthew Ehrlich 👨‍💻](https://www.linkedin.com/in/ACoAACkDxJoBuTwnVft0hkQae_lS7FUN7EB18JY) is doing the complete opposite.

- He's running the Self-Taught Devs podcast with [Eric Winkelspecht](https://www.linkedin.com/in/ACoAAB9xWvMB9OrhK1Fhc5Js5A8097KOhtZktSI), a fellow software developer and career changer as well, where they document their journey and those of their peers. I was interviewed on it, it's great! You should check it out on Spotify.
- He's building in public, and has two very decent projects on his GitHub.
- He has a devlog on YouTube where he shares his progress, what he learned, but also the psychological aspect of the learning journey.
- He's learned TypeScript, React, HTML, CSS, Storybook, NodeJS and Express. He also deployed his projects on Vercel (frontend) and Render (backend), and he worked with Firebase Auth too.

I couldn't believe it when I saw it: his public branding is insane, but no one ever told him to boost his CV! Your personal brand gets you the spotlight, but the CV opens the door.

So we did just that. We spent a few hours together and revamped his CV. Now he's applying for jobs!

If you're out there trying to find your first job in tech and feel like you've tried everything on your own, start asking questions. You'd be surprised what kind of answers you get!

Matthew's based in the US, so if anybody in my network has an oppprtunity for a frontend developer, just get in touch with him and Eric. They both deserve a chance big time!`,
	},

].reverse()

export default blogEntries