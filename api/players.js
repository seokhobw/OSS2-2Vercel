let players = [
  { id: 1, name: "손흥민", position: "FW", nation: "Korea", salary: 12000000 },
  { id: 2, name: "이강인", position: "MF", nation: "Korea", salary: 3500000 },
  { id: 3, name: "Cristiano Ronaldo", position: "FW", nation: "Portugal", salary: 20000000 },
  { id: 4, name: "Lionel Messi", position: "FW", nation: "Argentina", salary: 25000000 },
  { id: 5, name: "Kevin De Bruyne", position: "MF", nation: "Belgium", salary: 18000000 },
  { id: 6, name: "Erling Haaland", position: "FW", nation: "Norway", salary: 19000000 },
  { id: 7, name: "Virgil van Dijk", position: "DF", nation: "Netherlands", salary: 12000000 },
  { id: 8, name: "Kylian Mbappe", position: "FW", nation: "France", salary: 30000000 },
  { id: 9, name: "Luka Modric", position: "MF", nation: "Croatia", salary: 10000000 },
  { id: 10, name: "Harry Kane", position: "FW", nation: "England", salary: 15000000 },
];

export default function handler(req, res) {
  const { method } = req;

  if (method === "GET") {
    res.status(200).json(players);
  } else if (method === "POST") {
    const newPlayer = { id: Date.now(), ...req.body };
    players.push(newPlayer);
    res.status(201).json(newPlayer);
  } else if (method === "PUT") {
    const { id, ...rest } = req.body;
    players = players.map(p => (p.id === id ? { ...p, ...rest } : p));
    res.status(200).json({ message: "Updated", id });
  } else if (method === "DELETE") {
    const { id } = req.query;
    players = players.filter(p => p.id != id);
    res.status(200).json({ message: "Deleted", id });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}