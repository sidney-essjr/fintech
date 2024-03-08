import Fintech from "../assets/Fintech";
import resumo from "../assets/icons/resumo.svg";
import vendas from "../assets/icons/vendas.svg";
import webhooks from "../assets/icons/webhooks.svg";
import configuracoes from "../assets/icons/configuracoes.svg";
import contato from "../assets/icons/contato.svg";
import sair from "../assets/icons/sair.svg";
import { NavLink } from "react-router-dom";

export default function SideNav() {
  return (
    <nav className="sidenav box bg-3">
      <Fintech title="logo site fintech" />
      <ul>
        <li>
          <span>
            <img src={resumo} alt="" />
          </span>
          <NavLink to={"/"}>Resumo</NavLink>
        </li>
        <li>
          <span>
            <img src={vendas} alt="" />
          </span>
          <NavLink to={"/vendas"}>Vendas</NavLink>
        </li>
        <li>
          <span>
            <img src={webhooks} alt="" />
          </span>
          <NavLink to={""}>Webhooks</NavLink>
        </li>
        <li>
          <span>
            <img src={configuracoes} alt="" />
          </span>
          <NavLink to={""}>Configurações</NavLink>
        </li>
        <li>
          <span>
            <img src={contato} alt="" />
          </span>
          <NavLink to={""}>Contato</NavLink>
        </li>
        <li>
          <span>
            <img src={sair} alt="" />
          </span>
          <NavLink to={""}>Sair</NavLink>
        </li>
      </ul>
    </nav>
  );
}
