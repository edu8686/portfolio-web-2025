import SocialLinks from "../components/SocialLinks";

export default function Contact() {
  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-3xl text-gray-700">Contact Me</h2>
      <p className="text-gray-600">You can find me in the following links:</p>
      <SocialLinks />
    </div>
  );
}
