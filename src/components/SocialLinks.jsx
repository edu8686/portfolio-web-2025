import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex gap-4">
      <a href="https://github.com/edu8686" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-2xl hover:text-gray-400 transition" />
      </a>
      <a href="https://linkedin.com/in/eduardodnegri/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-2xl hover:text-blue-600 transition" />
      </a>
      <a href="https://instagram.com/edu.denegri" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-2xl hover:text-pink-500 transition" />
      </a>
    </div>
  );
};

export default SocialLinks;
