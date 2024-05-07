{
  type a1 = number;
  type b1 = undefined;

  type x = a1 extends null ? true : false;
  type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

  type Product = {
    bike: string;
    car: string;
    ship: string;
  };

  type CheckVehicle<T> = T extends keyof Product ? true : false;

  type hasCar = CheckVehicle<"car">;
  type hasPlane = CheckVehicle<"Plane">;
}
