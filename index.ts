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
		["Amberol", "Plays music, and nothing else"],
		["Apostrophe", "Edit Markdown in style"],
		["Audio Sharing", "Share your computer audio"],
		["Authenticator", "Generate two-factor codes"],
		["Biblioteca", "Read GNOME documentation offline"],
		["Binary", "Convert numbers between bases"],
		["Blanket", "Listen to ambient sounds"],
		["Boatswain", "Control your Elgato Stream Decks"],
		["Cartridges", "Launch all your games"],
		["Chess Clock", "Time games of over-the-board chess"],
		["Citations", "Manage your bibliography"],
		["Clairvoyant", "Ask questions, get psychic answers"],
		["Collision", "Check hashes for your files"],
		["Commit", "Commit message editor"],
		["Curtail", "Compress your images"],
		["Decibels", "Play audio files"],
		["Decoder", "Scan and Generate QR Codes"],
		["Déjà Dup Backups", "Protect yourself from data loss"],
		["Dialect", "Translate between languages"],
		["Ear Tag", "Edit audio file tags"],
		["Elastic", "Design spring animations"],
		["Emblem", "Generate project avatars"],
		["Errands", "Manage your tasks"],
		["Eyedropper", "Pick and format colors"],
		["File Shredder", "Permanently delete your files"],
		["Forge Sparks", "Get Git forges notifications"],
		["Fragments", "Manage torrents"],
		["Fretboard", "Look up guitar chords"],
		["Gaphor", "Simple UML and SysML modeling tool"],
		["Graphs", "Plot and manipulate data"],
		["Health", "Track your fitness goals"],
		["Hieroglyphic", "Find LaTeX symbols"],
		["Identity", "Compare images and videos"],
		["Impression", "Create bootable drives"],
		["Junction", "Application chooser"],
		["Khronos", "Log the time it took to do tasks"],
		["Komikku", "Discover and read manga & comics"],
		["Letterpress", "Create beautiful ASCII art"],
		["Lorem", "Generate placeholder text"],
		["Metadata Cleaner", "View and clean metadata in files"],
		["Mousai", "Identify songs in seconds"],
		["Newsflash", "Keep up with your feeds"],
		["Obfuscate", "Censor private information"],
		["Paper Clip", "Edit PDF document metadata"],
		["Pika Backup", "Keep your data safe"],
		["Podcasts", "Listen to your favorite shows"],
		["Polari", "Talk to people on IRC"],
		["Railway", "Find all your travel information"],
		["Resources", "Keep an eye on system resources"],
		["Secrets", "Manage your passwords"],
		["Share Preview", "Test social media cards locally"],
		["Shortwave", "Listen to internet radio"],
		["Solanum", "Balance working time and break time"],
		["Switcheroo", "Convert and manipulate images"],
		["Tangram", "Browser for your pinned tabs"],
		["Text Pieces", "Developer's scratchpad"],
		["Tuba", "Browse the Fediverse"],
		["Valuta", "Convert between currencies"],
		["Video Trimmer", "Trim videos quickly"],
		["Warp", "Fast and secure file transfer"],
		["Webfont Kit Generator", "Create @font-face kits easily"],
		["Wike", "Search and read Wikipedia articles"],
		["Workbench", "Prototype with GNOME technologies"],
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
