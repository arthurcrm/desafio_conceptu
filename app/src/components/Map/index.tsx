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
  estado_abrev: string;
  cob_vac_bcg: number;
  ano: number;
  color: string;
}

export function Map({ svgUrl, estadoAbrev, ano }: MapProps) {
  const municipioData: any = munData;
  const data = municipioData
    .filter((d: MunicipioDataProps) => d.ano === +ano)
    .filter((d: MunicipioDataProps) => d.estado_abrev === estadoAbrev)
    .map((d: MunicipioDataProps) => {
      if (d.cob_vac_bcg >= 0 && d.cob_vac_bcg <= 10) {
        d.color = 'rgb(255, 0, 0)';
      } else if (d.cob_vac_bcg > 10 && d.cob_vac_bcg <= 20) {
        d.color = 'rgb(233, 0, 0)';
      } else if (d.cob_vac_bcg > 20 && d.cob_vac_bcg <= 30) {
        d.color = 'rgb(255, 60, 0)';
      } else if (d.cob_vac_bcg > 30 && d.cob_vac_bcg <= 40) {
        d.color = 'rgb(255, 102, 0)';
      } else if (d.cob_vac_bcg > 40 && d.cob_vac_bcg <= 60) {
        d.color = 'rgb(245, 178, 22)';
      } else if (d.cob_vac_bcg > 60 && d.cob_vac_bcg <= 70) {
        d.color = 'rgb(255, 230, 0)';
      } else if (d.cob_vac_bcg > 70 && d.cob_vac_bcg <= 80) {
        d.color = 'rgb(193, 245, 22)';
      } else if (d.cob_vac_bcg > 80 && d.cob_vac_bcg <= 90) {
        d.color = 'rgb(132, 212, 28)';
      } else {
        d.color = 'rgb(0, 255, 0)';
      }
      return d;
    });

  return (
    <div className="map">
      <MapContainer>
        <MapComponent munConfig={data} data-src={svgUrl} />
      </MapContainer>
    </div>
  );
}
