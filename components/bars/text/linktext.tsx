interface Props {
    children: React.ReactNode;
  }
  
  const PoppinsFont: React.FC<Props> = ({ children }) => (
    <div
      style={{
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '28px',
        lineHeight: '72px',
        letterSpacing: '-0.025em',
        color: '#1F1F1F'
      }}
    >
      {children}
    </div>
  );
  
  export default PoppinsFont;