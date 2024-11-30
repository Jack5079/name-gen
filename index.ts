import { GoogleGenerativeAI } from "@google/generative-ai"
import system_prompt from "./system_prompt.txt" assert { type: "text" }


const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)
const model = genAI.getGenerativeModel({ model: process.env.GEMINI_MODEL ?? "gemini-1.5-flash" })

const session = model.startChat({
	systemInstruction: {
		role: "system",
		parts: [{ text: system_prompt }],
	},
	history: [
		["Eyedropper", "Pick and format colors"],
		["Audio Sharing", "Share your computer audio"],
		["Health", "Track your fitness goals"],
		["Apostrophe", "Edit Markdown in style"],
		["Khronos", "Log the time it took to do tasks"],
		["Railway", "Find all your travel information"],
		["Blanket", "Listen to ambient sounds"],
		["Impression", "Create bootable drives"],
		["Errands", "Manage your tasks"],
		["Decibels", "Play audio files"],
		["Workbench", "Prototype with GNOME technologies"],
		["Authenticator", "Generate two-factor codes"],
		["Pika Backup", "Keep your data safe"],
		["Letterpress", "Create beautiful ASCII art"],
		["Paper Clip", "Edit PDF document metadata"],
		["Newsflash", "Keep up with your feeds"],
		["Resources", "Keep an eye on system resources"],
		["Collision", "Check hashes for your files"],
		["Video Trimmer", "Trim videos quickly"],
		["Metadata Cleaner", "View and clean metadata in files"],
		["Emblem", "Generate project avatars"],
		["Identity", "Compare images and videos"],
		["Fragments", "Manage torrents"],
		["Share Preview", "Test social media cards locally"],
		["Cartridges", "Launch all your games"],
		["File Shredder", "Permanently delete your files"],
		["Dialect", "Translate between languages"],
		["Curtail", "Compress your images"],
		["Podcasts", "Listen to your favorite shows"],
		["Mousai", "Identify songs in seconds"],
		["Text Pieces", "Developer's scratchpad"],
		["Switcheroo", "Convert and manipulate images"],
		["Wike", "Search and read Wikipedia articles"],
		["Boatswain", "Control your Elgato Stream Decks"],
		["Komikku", "Discover and read manga & comics"],
		["Commit", "Commit message editor"],
		["Warp", "Fast and secure file transfer"],
		["Junction", "Application chooser"],
		["Tuba", "Browse the Fediverse"],
		["Chess Clock", "Time games of over-the-board chess"],
		["Webfont Kit Generator", "Create @font-face kits easily"],
		["Secrets", "Manage your passwords"],
		["Gaphor", "Simple UML and SysML modeling tool"],
		["Biblioteca", "Read GNOME documentation offline"],
		["Forge Sparks", "Get Git forges notifications"],
		["Polari", "Talk to people on IRC"],
		["Obfuscate", "Censor private information"],
		["Amberol", "Plays music, and nothing else"],
		["Clairvoyant", "Ask questions, get psychic answers"],
		["Valuta", "Convert between currencies"],
		["Solanum", "Balance working time and break time"],
		["Elastic", "Design spring animations"],
		["Ear Tag", "Edit audio file tags"],
		["Tangram", "Browser for your pinned tabs"],
		["Graphs", "Plot and manipulate data"],
		["Binary", "Convert numbers between bases"],
		["Hieroglyphic", "Find LaTeX symbols"],
		["Citations", "Manage your bibliography"],
		["Déjà Dup Backups", "Protect yourself from data loss"],
		["Shortwave", "Listen to internet radio"],
		["Fretboard", "Look up guitar chords"],
		["Decoder", "Scan and Generate QR Codes"],
		["Lorem", "Generate placeholder text"],
	].flatMap(([name, description]) => [
		{ role: "user", parts: [{ text: description }] },
		{ role: "model", parts: [{ text: name }] },
	]),
})

while (true) {
	const description = prompt(">")
	const response = await session.sendMessageStream(description!)
	for await (const chunk of response.stream) {
		console.write(chunk.text())
	}
}
