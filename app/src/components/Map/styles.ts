import styled, { css } from 'styled-components';

interface MapProps {
  id_munic: string;
  nomeMunincipio: string;
  valueVacinacao: number;
  customColor: string;
}

export const MapContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  margin-bottom: 1rem;

  color: white;
`;

export const Map = styled.svg<MapProps>`
  width: 30rem;
  height: 15rem;

  path[id*='${props => props.id_munic}'] {
    fill: ${props => props.customColor};
  }
`;
