export const CriticResult = ({
  criticLevel,
  painLevel,
  location,
  actionPenaltyLevel,
  otherConsequences,
}: {
  criticLevel: number;
  painLevel: number;
  location: string;
  actionPenaltyLevel: number;
  otherConsequences: string;
}) => {
  return (
    <p style={{ textAlign: 'center', fontSize: '18px' }}>
      <b>
        Nivel de crítico (penalizador):{' '}
        <span style={{ color: '#6e2917' }}>${criticLevel}</span>
      </b>
      <br />
      <b>
        Por dolor: <span style={{ color: '#6e2917' }}>${painLevel}</span>
      </b>
      <br />
      <b>
        Por gravedad:{' '}
        <span style={{ color: '#6e2917' }}>${actionPenaltyLevel}</span>
      </b>
      <br />
      <b>
        Localización: <span style={{ color: '#6e2917' }}>${location}</span>
      </b>
      <br />

      <span style={{ fontSize: '15px' }}>${otherConsequences}</span>
    </p>
  );
};
