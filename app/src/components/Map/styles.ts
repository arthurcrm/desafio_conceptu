import styled from 'styled-components';

interface MunConfigProps {
  id_munic: number;
  nomemun: string;
  cob_vac_bcg: number;
  color: string;
}

interface MapProps {
  munConfig: MunConfigProps[];
}

export const MapContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  margin: 1rem 0;
  padding-bottom: 2rem;

  border: 1px solid red;

  color: white;
`;

export const Map = styled.svg<MapProps>`
  width: 30rem;
  height: 15rem;

  margin-top: 2rem;

  ${props => {
    return props.munConfig.map((config: MunConfigProps) => {
      return `
      path[id*='${config.id_munic}'] {
        fill: ${config.color};
      }
      `;
    });
  }}
`;
