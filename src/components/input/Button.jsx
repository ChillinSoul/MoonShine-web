const Button = ({ text, color, callback, type, id }) => {
  return (
    <>
      <button
        onClick={callback}
        id={id}
        type={type}
        className={` block my-auto  h-12 animate-shimmer text-${color}-400 items-center justify-center rounded
                    border border-${color}-400 bg-[linear-gradient(110deg,#f5f3ef,45%,#fff,55%,#f5f3ef)] 
                    bg-[length:200%_100%] px-6  font-medium  transition-colors 
                    focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50`}
      >
        {text}
      </button>

      <style>
        {`
            .animate-shimmer {
                animation: shimmer 2s linear infinite;
            }
            @keyframes shimmer {
                from {
                    background-position: 0 0;
                }
                to {
                    background-position: -200% 0;
                }
            }
        `}
      </style>
    </>
  );
};

export default Button;
