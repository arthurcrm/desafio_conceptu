import { useState } from 'react';
import { Map as MapComponent, MapContainer } from './styles';
import munData from '../../assets/data.json';

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
  let color = '';

  const [showInfo, setShowInfo] = useState(false);

  const timedDataInterval = municipioData.filter(
    (d: MunicipioDataProps) => d.ano === +ano,
  );
  const data = timedDataInterval.filter(
    (d: MunicipioDataProps) => d.estado_abrev === estadoAbrev,
  );

  return (
    <div className="map">
      {data.map((d: MunicipioDataProps) => {
        if (d.cob_vac_bcg >= 0 && d.cob_vac_bcg <= 10) {
          color = 'rgb(255, 0, 0)';
        } else if (d.cob_vac_bcg > 10 && d.cob_vac_bcg <= 20) {
          color = 'rgb(233, 0, 0)';
        } else if (d.cob_vac_bcg > 20 && d.cob_vac_bcg <= 30) {
          color = 'rgb(255, 60, 0)';
        } else if (d.cob_vac_bcg > 30 && d.cob_vac_bcg <= 40) {
          color = 'rgb(255, 102, 0)';
        } else if (d.cob_vac_bcg > 40 && d.cob_vac_bcg <= 60) {
          color = 'rgb(245, 178, 22)';
        } else if (d.cob_vac_bcg > 60 && d.cob_vac_bcg <= 70) {
          color = 'rgb(255, 230, 0)';
        } else if (d.cob_vac_bcg > 70 && d.cob_vac_bcg <= 80) {
          color = 'rgb(193, 245, 22)';
        } else if (d.cob_vac_bcg > 80 && d.cob_vac_bcg <= 90) {
          color = 'rgb(132, 212, 28)';
        } else {
          color = 'rgb(0, 255, 0)';
        }
        return (
          <MapContainer>
            {showInfo ? (
              <div>
                <h3>{d.nomemun}</h3>
                <h5>{d.cob_vac_bcg.toFixed(2)}</h5>
              </div>
            ) : null}
            <MapComponent
              valueVacinacao={d.cob_vac_bcg}
              id_munic={String(d.id_munic)}
              data-src={svgUrl}
              onMouseOver={() => setShowInfo(true)}
              onMouseOut={() => setShowInfo(false)}
              customColor={color}
              nomeMunincipio={d.nomemun}
            />
          </MapContainer>
        );
      })}
    </div>
  );
}
