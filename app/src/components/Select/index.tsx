import { useState } from 'react';
import { Map } from '../Map';
import { SelectContainer, SelectContent, Title } from './styles';

export function SelectState() {
  const [selectedState, setSelectedState] = useState('');
  const [selectedInterval, setSelectedInterval] = useState('');
  const [svgUrl, setSvgUrl] = useState('');

  async function handleClickButton() {
    await fetch(
      `https://servicodados.ibge.gov.br/api/v3/malhas/estados/${selectedState}?formato=image/svg+xml&qualidade=intermediaria&intrarregiao=municipio`,
    ).then(res => setSvgUrl(res.url));
  }

  const estados = [
    {
      id: 1,
      state: 'AC',
      value: 'Acre',
    },
    {
      id: 2,
      state: 'AL',
      value: 'Alagoas',
    },
    {
      id: 3,
      state: 'AP',
      value: 'Amapá',
    },
    {
      id: 4,
      state: 'AM',
      value: 'Amazonas',
    },
    {
      id: 5,
      state: 'BA',
      value: 'Bahia',
    },
    {
      id: 6,
      state: 'CE',
      value: 'Ceará',
    },
    {
      id: 7,
      state: 'DF',
      value: 'Distrito Federal',
    },
    {
      id: 8,
      state: 'ES',
      value: 'Espírito Santo',
    },
    {
      id: 9,
      state: 'GO',
      value: 'Goiás',
    },
    {
      id: 10,
      state: 'MA',
      value: 'Maranhão',
    },
    {
      id: 11,
      state: 'MT',
      value: 'Mato Grosso',
    },
    {
      id: 12,
      state: 'MS',
      value: 'Mato Grosso do Sul',
    },
    {
      id: 13,
      state: 'MG',
      value: 'Minas Gerais',
    },
    {
      id: 14,
      state: 'PA',
      value: 'Pará',
    },
    {
      id: 15,
      state: 'PB',
      value: 'Paraíba',
    },
    {
      id: 16,
      state: 'PR',
      value: 'Paraná',
    },
    {
      id: 17,
      state: 'PE',
      value: 'Pernambuco',
    },
    {
      id: 18,
      state: 'PI',
      value: 'Piauí',
    },
    {
      id: 19,
      state: 'RJ',
      value: 'Rio de Janeiro',
    },
    {
      id: 20,
      state: 'RN',
      value: 'Rio Grande do Norte',
    },
    {
      id: 21,
      state: 'RS',
      value: 'Rio Grande do Sul',
    },
    {
      id: 22,
      state: 'RO',
      value: 'Rondônia',
    },
    {
      id: 23,
      state: 'RR',
      value: 'Roraima',
    },
    {
      id: 24,
      state: 'SC',
      value: 'Santa Catarina',
    },
    {
      id: 25,
      state: 'SP',
      value: 'São Paulo',
    },
    {
      id: 26,
      state: 'SE',
      value: 'Sergipe',
    },
    {
      id: 27,
      state: 'TO',
      value: 'Tocantins',
    },
  ];

  const intervalos = [
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
  ];

  return (
    <SelectContainer>
      <Title>Selecione um estado e um intervalo de tempo</Title>
      <SelectContent>
        <select
          className="select"
          value={selectedState}
          onChange={e => setSelectedState(e.target.value)}
          name="state"
        >
          <option key="default_state" value="default">
            Selecione um estado
          </option>
          {estados.map(estado => (
            <option key={estado.id} value={estado.state}>
              {estado.value}
            </option>
          ))}
        </select>
        <select
          value={selectedInterval}
          onChange={e => setSelectedInterval(e.target.value)}
          name="interval"
        >
          <option key="default_time" value="default">
            Selecione um intervalo
          </option>
          {intervalos.map(intervalo => (
            <option key={intervalo} value={intervalo}>
              {intervalo}
            </option>
          ))}
        </select>
      </SelectContent>
      <button onClick={handleClickButton} type="button">
        GERAR MAPA
      </button>

      {svgUrl ? (
        <Map
          ano={selectedInterval}
          estadoAbrev={selectedState}
          svgUrl={svgUrl}
        />
      ) : null}
    </SelectContainer>
  );
}
