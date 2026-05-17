const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

      {/* Base gradient background */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 80% 60% at 20% 30%, rgba(26,86,160,0.15) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 80% 70%, rgba(139,92,246,0.08) 0%, transparent 60%), linear-gradient(160deg, #07111F 0%, #0B1A30 50%, #060E1A 100%)'
      }}></div>

      {/* Subtle grid */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }}></div>

      {/* Floating orbs */}
      <div className="absolute rounded-full" style={{
        width: '400px', height: '400px', top: '10%', left: '5%',
        background: 'radial-gradient(circle, rgba(26,86,160,0.12) 0%, transparent 70%)',
        animation: 'floatOrb1 12s ease-in-out infinite'
      }}></div>

      <div className="absolute rounded-full" style={{
        width: '300px', height: '300px', top: '50%', right: '10%',
        background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)',
        animation: 'floatOrb2 15s ease-in-out infinite'
      }}></div>

      <div className="absolute rounded-full" style={{
        width: '250px', height: '250px', bottom: '20%', left: '30%',
        background: 'radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)',
        animation: 'floatOrb3 18s ease-in-out infinite'
      }}></div>

      <style>{`
        @keyframes floatOrb1 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.05); }
          66% { transform: translate(-20px, 30px) scale(0.95); }
        }
        @keyframes floatOrb2 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(-40px, 20px) scale(1.08); }
          66% { transform: translate(20px, -30px) scale(0.92); }
        }
        @keyframes floatOrb3 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(25px, -25px) scale(1.06); }
        }
      `}</style>
    </div>
  );
};

export default ThreeBackground;
