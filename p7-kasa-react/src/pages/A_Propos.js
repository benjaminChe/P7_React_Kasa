import Tag from "../components/Tag";
import Banniere from "../components/banniere";
import LogementBarreDeroulante from "../components/logementBarreDeroulante";
export default function A_propos() {
    return (
        <>
            <div>
                ici test du component "Tag" <Tag />
            </div>
            <div>
                ici test du component "banniere" <Banniere />
            </div>
            <div>
                ici test du component "barre deroulante "
                <LogementBarreDeroulante />
            </div>
        </>
    );
}
