import wp1 from "@/assets/wallpaper-01-living.jpg";
import wp2 from "@/assets/wallpaper-02-lighting.jpg";
import wp3 from "@/assets/wallpaper-03-art.jpg";
import wp4 from "@/assets/wallpaper-04-dining.jpg";
import wp5 from "@/assets/wallpaper-05-bedroom.jpg";
import wp6 from "@/assets/wallpaper-06-showroom.jpg";

const wallpapers = [
  { src: wp1, label: "01 — Sala de Estar" },
  { src: wp2, label: "02 — Iluminação" },
  { src: wp3, label: "03 — Galeria de Arte" },
  { src: wp4, label: "04 — Sala de Jantar" },
  { src: wp5, label: "05 — Quarto" },
  { src: wp6, label: "06 — Fachada Showroom" },
];

const Wallpapers = () => {
  return (
    <div className="min-h-screen bg-black p-8">
      <h1 className="text-white text-3xl font-serif text-center mb-2">
        Wallpapers Nuhaus — 1920×1080
      </h1>
      <p className="text-gray-400 text-center mb-10 text-sm">
        Clique com botão direito → "Salvar imagem como..." para baixar cada uma
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {wallpapers.map((wp) => (
          <div key={wp.label} className="group">
            <img
              src={wp.src}
              alt={wp.label}
              className="w-full rounded-lg shadow-xl"
            />
            <div className="flex items-center justify-between mt-3">
              <p className="text-gray-300 text-sm">{wp.label}</p>
              <a
                href={wp.src}
                download
                className="text-xs bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded transition-colors"
              >
                ⬇ Baixar
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wallpapers;
