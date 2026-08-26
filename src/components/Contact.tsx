import { LinkIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { Trans } from "react-i18next";

function Contact() {
  const phone = "5513997705991";
  return (
    <div className="flex gap-2 flex-wrap justify-around gap-y-1 text-xs">
      <div className="flex items-center gap-1">
        <div className="border border-slate-800 p-1 rounded-full">
          <MailIcon size={14} />
        </div>
        <div>
          <a href="mailto:milenecaje@gmail.com" target="_blank">
            milenecaje@gmail.com
          </a>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <div className="border border-slate-800 p-1 rounded-full">
          <PhoneIcon size={14} />
        </div>
        <div>
          <a
            href={`https://wa.me/${phone}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            +55(13)99770-5991
          </a>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <div className="border border-slate-800 p-1 rounded-full">
          <LinkIcon size={14} />
        </div>
        <div>
          <a href="https://www.linkedin.com/in/milenebraz/" target="_blank">
            https://www.linkedin.com/in/milenebraz/
          </a>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <div className="border border-slate-800 p-1 rounded-full">
          <MapPinIcon size={12} />
        </div>
        <div>
          <Trans i18nKey="contact.location" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
