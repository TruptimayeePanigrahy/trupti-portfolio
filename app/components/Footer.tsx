export default function Footer() {
  return (
    <footer className="py-8 text-center text-slate-600 dark:text-slate-400 border-t border-green-200 dark:border-cyan-500/20">
      <div className="container mx-auto px-4">
        <p>© {new Date().getFullYear()} Truptimayee Panigrahy. All rights reserved.</p>
      </div>
    </footer>
  );
}
