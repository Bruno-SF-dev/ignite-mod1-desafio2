import { memo, useCallback } from "react";
import "../styles/sidebar.scss";

import { Button } from "./Button";

interface SideBarProps {
  genres: Array<{
    id: number;
    name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
    title: string;
  }>;
  selectedGenreId: number;
  setSelectedGenreId: (id: number) => void;
}

function SideBarComponent(props: SideBarProps) {
  const handleClickButton = useCallback((id: number) => {
    props.setSelectedGenreId(id);
  }, []);

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {props.genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={props.selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}

export const SideBar = memo(SideBarComponent);
