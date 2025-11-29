import styles from './styles.module.scss'

import { faBookOpen, faCheck, faCode, faComments, faPeopleGroup, faPersonRunning } from '@fortawesome/free-solid-svg-icons'

import { SkillCard } from './components/SkillCard'

export function SkillList() {
  const skillsList = [
    {
      title: 'Versatilidade técnica',
      icon: faCode,
      description: `Possuo um grande conjunto de habilidades técnicas perfeitas para
      conduzir projetos desde o planejamento até o desenvolvimento e implementação.`,
    },
    {
      title: 'Planejamento eficiente',
      icon: faCheck,
      description: `Grande capacidade de planejamento preciso e eficaz, prevendo os
      principais desafios da implementação e identificando os caminhos corretos para o
      desenvolvimento.`,
    },
    {
      title: 'Adaptabilidade',
      icon: faPersonRunning,
      description: `Ótima capacidade de adaptação a diferentes demandas, tecnologias e
      equipes, evitando interrupções no desenvolvimento e mantendo os fluxos de seu projeto
      a todo vapor!`,
    },
    {
      title: 'Colaboração em equipe',
      icon: faPeopleGroup,
      description: `Boa capacidade de trabalho em equipe, organizando e dividindo responsabilidades
      para atingir um objetivo comum.`,
    },
    {
      title: 'Comunicação clara',
      icon: faComments,
      description: `Procuro sempre transmitir as informações necessárias da forma mais clara e eficiente
      possível, evitando falhas de comunicação e problemas decorrentes.`,
    },
    {
      title: 'Aprendizado contínuo',
      icon: faBookOpen,
      description: `Busco diariamente aprender novas tecnologias e me aperfeiçoar cada vez mais nas que já
      possuo domínio para manter os seus projetos com as ferramentas mais atualizadas e eficientes do momento!`,
    },
  ]

  return (
    <div className={styles.skillList}>
      {
        skillsList.map((itemData, itemIndex) => (
          <SkillCard
            key={`itemIndex${itemIndex}`}
            index={itemIndex}
            {...itemData}
          />
        ))
      }
    </div>
  )
}