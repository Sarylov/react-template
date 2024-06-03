import { selectTheme } from "@/entities/session";
import { useAppSelector } from "../model/hooks";
import { TImage } from "../model/types";
import { Slider } from "@/shared/ui";

interface IProps {
  children: React.ReactNode;
  images: TImage[];
  FavoriteButton?: JSX.Element;
  TypeBadge?: JSX.Element;
}
export const Hero: React.FC<IProps> = ({ children, images, TypeBadge }) => {
  const theme = useAppSelector(selectTheme);

  return (
    <div className="flex flex-col items-start gap-4  lg:flex-row">
      <div className="relative mt-2 w-full overflow-hidden lg:mt-0 lg:w-1/2 ">
        {TypeBadge && (
          <div className="absolute right-4 top-4 z-20">{TypeBadge}</div>
        )}
        <Slider
          images={images}
          classNames="block rounded-lg overflow-hidden aspect-[2/1.2] flex-1"
        />
      </div>
      <div
        className={`flex w-full gap-2 rounded-xl ${
          theme === "dark" ? "bg-dark-base-200" : "bg-light-base-200 text-black"
        } px-4 py-2 lg:w-1/2`}
      >
        <div className="mt-4 w-full md:mt-0">{children}</div>
      </div>
    </div>
  );
};
