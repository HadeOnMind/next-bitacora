export const mockSketchbooks: Sketchbook[] = [
  {
    id: "1",
    title: "Planet Elaris",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    categories: [
      {
        id: "c1",
        name: "Species",
        entries: [
          {
            id: "e1",
            title: "Glass Hounds",
            content: "Transparent skin, adapted to cold moons.",
            createdAt: new Date().toISOString(),
          },
        ],
      },
    ],
  },
];
