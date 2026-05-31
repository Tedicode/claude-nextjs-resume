import { AnimatePresence, motion } from "framer-motion";
import { Skill } from "@/data/skills";

type Props = {
    skill: Skill | null
    onCloseSkill: () => void
}

export default function SkillOverlay({ skill, onCloseSkill }: Props) {
  return (
    <AnimatePresence>
      {skill && (
        <motion.div
          key={skill.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
        >
          <h1>Skill Name: {skill.name}</h1>
          <p>Description: {skill.description}</p>
          <p>Associations: {skill.associations?.map(a => a.type).join(', ')}</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}