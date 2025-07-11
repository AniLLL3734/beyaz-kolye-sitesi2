
import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import { TeamMember } from '../types';

const MemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <div className="bg-black/40 border border-[#00ff41]/30 rounded-lg p-6 text-center card-glow">
    <h3 className="text-2xl font-bold text-[#00ff41]">{member.handle}</h3>
    <p className="text-gray-400 mt-1">({member.name})</p>
    <div className="w-1/3 h-px bg-[#00ff41]/50 mx-auto my-4"></div>
    <p className="text-lg text-white">{member.role}</p>
  </div>
);

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10 text-glow">Ekip: Yapımcılar</h1>
      <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
        BEYAZ KOLYE HACK, oyun dünyasının sınırlarını zorlamak için bir araya gelmiş yetenekli geliştiricilerden oluşur. İşte kodun arkasındaki beyinler:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TEAM_MEMBERS.map(member => (
          <MemberCard key={member.handle} member={member} />
        ))}
      </div>
    </div>
  );
};

export default About;
