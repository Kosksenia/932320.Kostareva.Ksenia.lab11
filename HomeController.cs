using Microsoft.AspNetCore.Mvc;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        // Генерируем начальные значения для демонстрации
        var random = new Random();
        ViewBag.FirstNumber = random.Next(0, 11);
        ViewBag.SecondNumber = random.Next(0, 11);
        return View();
    }
}