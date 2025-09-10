import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="bg-[#0B0C10] text-[#F5F6FA] min-h-screen font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-[#0B0C10]/90 backdrop-blur z-50 p-4 flex justify-between items-center shadow-lg">
        <h1 className="text-2xl font-bold text-[#2E86DE]">Cristiano Barreto</h1>
        <nav className="space-x-6">
          <a href="#inicio" className="hover:text-[#0CA678] transition">Início</a>
          <a href="#projetos" className="hover:text-[#0CA678] transition">Projetos</a>
          <a href="#sobre" className="hover:text-[#0CA678] transition">Sobre Mim</a>
          <a href="#contato" className="hover:text-[#0CA678] transition">Contato</a>
        </nav>
      </header>

      {/* Início */}
      <section id="inicio" className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#0CA678] to-[#2E86DE]"
        >
          Desenvolvedor Full Stack
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-lg max-w-2xl"
        >
          Crio soluções digitais modernas, responsivas e integradas. 
          Experiência com React, Node.js, APIs e Firebase.
        </motion.p>
      </section>

      {/* Projetos */}
      <section id="projetos" className="py-20 px-6">
        <h3 className="text-3xl font-bold text-[#2E86DE] text-center mb-12">Projetos</h3>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="bg-[#1B3B6F]/30 p-6 rounded-2xl shadow-lg border border-[#0CA678]/30"
          >
            <h4 className="text-xl font-semibold text-[#0CA678]">Sistema de Padaria</h4>
            <p className="mt-2 text-sm">
              Página para comércio com listagem de produtos, pedidos via WhatsApp e integração com Instagram.
            </p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="bg-[#1B3B6F]/30 p-6 rounded-2xl shadow-lg border border-[#0CA678]/30"
          >
            <h4 className="text-xl font-semibold text-[#0CA678]">Rifa de Chá de Fraldas</h4>
            <p className="mt-2 text-sm">
              Projeto integrado ao Firebase para registrar e armazenar dados de participantes em tempo real.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sobre Mim */}
      <section id="sobre" className="py-20 px-6 bg-gradient-to-r from-[#0CA678]/10 to-[#2E86DE]/10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-[#2E86DE] mb-6">Sobre Mim</h3>
          <p>
            Sou <span className="text-[#0CA678] font-semibold">Cristiano Barreto</span>, 
            desenvolvedor Full Stack apaixonado por tecnologia e inovação.  
            Tenho experiência na criação de aplicações modernas, responsivas e integradas, 
            sempre buscando evolução e novos desafios.
          </p>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 px-6">
        <h3 className="text-3xl font-bold text-[#2E86DE] text-center mb-12">Contato</h3>
        <div className="flex flex-col items-center space-y-4">
          <a href="mailto:cristiano.dev81@gmail.com" className="hover:text-[#0CA678] transition">📧 cristiano.dev81@gmail.com</a>
          <a href="https://wa.me/5522998448059" target="_blank" rel="noopener noreferrer" className="hover:text-[#0CA678] transition">📱 WhatsApp</a>
          <a href="https://github.com/cristianogithub1" target="_blank" rel="noopener noreferrer" className="hover:text-[#0CA678] transition">💻 GitHub</a>
          <a href="https://www.workana.com/freelancer/c689f5fb908488d439172d5ed45d209d" target="_blank" rel="noopener noreferrer" className="hover:text-[#0CA678] transition">🧑‍💻 Workana</a>
          <a href="https://www.linkedin.com/in/cris-dev-barreto?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="hover:text-[#0CA678] transition">🔗 LinkedIn</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B0C10] text-center py-6 border-t border-[#1B3B6F]">
        <p className="text-sm text-[#F5F6FA]/70">
          © {new Date().getFullYear()} Cristiano Chagas Barreto - Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
