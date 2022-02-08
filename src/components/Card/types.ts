export interface ICardProps {
  showMoreInfo?: boolean;
  src: string;
  specs: {
    title: string;
    description: string;
    price: number;
  };
}
