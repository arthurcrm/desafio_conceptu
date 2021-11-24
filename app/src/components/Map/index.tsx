import munData from '../../assets/data.json';

import './styles.scss';
import 'external-svg-loader';

interface MapProps {
  svgUrl: string;
  estadoAbrev: string;
  ano: string;
}

interface MunicipioDataProps {
  id_munic: number;
  nomemun: string;
  id_estado: number;
  estado_abrev: string;
  cob_vac_bcg: number;
  ano: number;
}

export function Map({ svgUrl, estadoAbrev, ano }: MapProps) {
  const municipioData: any = munData;

  const timedDataInterval = municipioData.filter(
    (d: MunicipioDataProps) => d.ano === +ano,
  );
  const data = timedDataInterval.filter(
    (d: MunicipioDataProps) => d.estado_abrev === estadoAbrev,
  );


  return (
    <div className="map">
      <svg data-src={svgUrl} fill="currentColor" />
    </div>
  );
}
