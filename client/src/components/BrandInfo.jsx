const ChartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-purple-400"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 100 15h-5.25a7.5 7.5 0 000-15h5.25z" /><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 10.5c0-1.141-1.631-2.09-3.75-2.09V6.75c2.119 0 3.75-.949 3.75-2.09v-1.5c-2.119 0-3.75.949-3.75 2.09v1.5zm-3.75 4.5c0 1.141 1.631 2.09 3.75 2.09v1.5c-2.119 0-3.75-.949-3.75-2.09v-1.5zm3.75 0c0-1.141-1.631-2.09-3.75-2.09v-1.5c2.119 0 3.75.949 3.75-2.09v-1.5z" /></svg>;
const HandshakeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-purple-400"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>;

export default function BrandInfo() {
  return (
    <div className="text-white w-full max-w-md flex flex-col items-center text-center md:items-start md:text-left">
      <h1 className="
        text-6xl lg:text-7xl {/* Tamanho de fonte menor por padrão, maior em telas grandes */}
        font-black 
        bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 
        bg-clip-text text-transparent 
        bg-[size:200%_auto] 
        animate-gradient-x hover:bg-[position:100%_0] 
        transition-all duration-500 ease-in-out
      ">
        FinanTech
      </h1>
      
      <p className="mt-4 text-lg text-slate-400 leading-relaxed">
        Sua plataforma para a liberdade financeira. Transforme o controle de gastos em uma ferramenta para conquistar seus sonhos e acessar novas oportunidades.
      </p>
      
      <ul className="mt-8 space-y-4">
        <li className="flex items-center gap-3">
          <ChartIcon />
          <span className="text-slate-300">Organize suas finanças de forma simples e visual.</span>
        </li>
        <li className="flex items-center gap-3">
          <HandshakeIcon />
          <span className="text-slate-300">Construa seu histórico e abra portas para o crédito.</span>
        </li>
      </ul>
    </div>
  );
}