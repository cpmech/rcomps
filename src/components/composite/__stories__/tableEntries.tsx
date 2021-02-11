export const rowsDefault = [
  {
    name: 'Bender Rodriguez',
    job: 'Delivery robot',
    ability: 'Robbery',
    knowledge: <strong>Bending girders</strong>,
    id: 10101,
    itemId: 'bender-rodriguez',
  },
  {
    name: 'Turanga Leela',
    job: 'Ship captain',
    ability: 'Kung fu',
    knowledge: <strong>Pilot ship</strong>,
    id: 22222,
    itemId: 'turanga-leela',
  },
  {
    name: 'Philip J Fry',
    // job: 'Delivery boy', // << missing
    ability: 'Useless',
    knowledge: <strong>Nada</strong>,
    id: 0,
    itemId: 'philip-j-fry',
  },
  {
    // name: 'Hermes Conrad', // << missing
    job: 'Bureaucrat',
    ability: 'Stamping',
    knowledge: <strong>Paperwork</strong>,
    id: 23,
    itemId: 'hermers-conrad',
  },
];

export const rowsComplete = [
  {
    name: 'Bender Rodriguez',
    job: 'Assistent to the delivery boy, supposedly',
    ability: 'Robbery',
    knowledge: 'Bending girders',
    id: 10101,
    itemId: 'bender-rodriguez',
  },
  {
    name: 'Turanga Leela',
    job: 'Ship captain',
    ability: 'Kung fu',
    knowledge: 'Pilot ship',
    id: 22222,
    itemId: 'turanga-leela',
  },
  {
    name: 'Philip J Fry',
    job: 'Delivery boy',
    ability: 'Useless',
    knowledge: 'Nada',
    id: 0,
    itemId: 'philip-j-fry',
  },
  {
    name: 'Hermes Conrad',
    job: 'Bureaucrat',
    ability: 'Stamping',
    knowledge: 'Paperwork',
    id: 23,
    itemId: 'hermers-conrad',
  },
];

export const rowsLong = [
  {
    name: 'Bender Rodriguez',
    email: 'bender.rodriguez@futurama.xyz',
    phone: '+1 (650) 1234-5678',
    userId: 'f5224e29-8690-4824-91c9-f85bd171d113',
    job: 'Assistent to the delivery boy, supposedly',
    ability: 'Robbery',
    knowledge: 'Bending girders',
    info: 'More information about Bender',
  },
  {
    name: 'Turanga Leela',
    email: 'turanga.leela@futurama.xyz',
    phone: '+1 (650) 1234-5678',
    userId: 'f5224e29-8690-4824-91c9-f85bd171d113',
    job: 'Ship captain',
    ability: 'Kung fu',
    knowledge: 'Pilot ship',
    info: 'More information about Leela',
  },
  {
    name: 'Philip J Fry',
    email: 'philip.j.fry@futurama.xyz',
    phone: '+1 (650) 1234-5678',
    userId: 'f5224e29-8690-4824-91c9-f85bd171d113',
    job: 'Delivery boy',
    ability: 'Useless',
    knowledge: 'Nada',
    info: 'More information about Fry',
  },
  {
    name: 'Hermes Conrad',
    info: 'More information about Hermers',
  },
];

export const renderId = (d: any) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      wordBreak: 'break-all',
      color: 'white',
    }}
  >
    {/* name */}
    <div
      style={{
        fontWeight: 'bold',
        fontSize: '2em',
      }}
    >
      {d.name}
    </div>

    {/* info */}
    <div
      style={{
        fontSize: '0.9em',
        color: '#4d50c6',
        marginBottom: 3,
      }}
    >{`(info: ${d.info})`}</div>

    {/* email */}
    <div
      style={{
        fontSize: '1.5em',
      }}
    >
      {d.email}
    </div>

    {/* phone */}
    <div
      style={{
        color: '#484848',
      }}
    >
      {d.phone}
    </div>

    {/* userId */}
    <div
      style={{
        fontStyle: 'italic',
      }}
    >
      {d.userId}
    </div>
  </div>
);
